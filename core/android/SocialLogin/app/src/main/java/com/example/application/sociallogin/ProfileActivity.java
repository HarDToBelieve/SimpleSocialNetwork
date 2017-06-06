package com.example.application.sociallogin;

import android.app.ProgressDialog;
import android.content.Intent;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.net.Uri;
import android.os.Handler;
import android.provider.MediaStore;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.squareup.picasso.MemoryPolicy;
import com.squareup.picasso.NetworkPolicy;
import com.squareup.picasso.Picasso;

import net.gotev.uploadservice.MultipartUploadRequest;
import net.gotev.uploadservice.UploadNotificationConfig;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class ProfileActivity extends AppCompatActivity implements View.OnClickListener {

    TextView username;
    TextView birthday;
    ImageView avatar;
    ImageView logout;
    TextView followText;
    String name = Singleton.getInstance().getUsername();
    String accessToken = Singleton.getInstance().getAccessToken();
    private int postID = 0;
    private final int IMG_REQUEST = 1;
    private RecyclerView recyclerView;
    private List<ProfileData> listItem;
    private ProfileDataAdapter adapter;
    private Uri imgPath;
    private Bitmap bitmap;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);

        BottomNavigationView bottomNavigationView = (BottomNavigationView) findViewById(R.id.bottomNavView_Bar);
        BottomNavigationViewHelper.disableShiftMode(bottomNavigationView);

        Menu menu = bottomNavigationView.getMenu();
        MenuItem menuItem = menu.getItem(4);
        menuItem.setChecked(true);


        username = (TextView) findViewById(R.id.username);
        birthday = (TextView) findViewById(R.id.birthday);
        avatar = (ImageView) findViewById(R.id.avatar);
        logout = (ImageView) findViewById(R.id.logout);
        followText = (TextView) findViewById(R.id.followText);
        followText.setVisibility(View.GONE);

        username.setText(name);

        loadProfileInfo();

         avatar.setOnClickListener(this);

//        if(imgPath != null) {
//            followText.setOnClickListener(this);
//        }
        followText.setOnClickListener(this);

        recyclerView = (RecyclerView) findViewById(R.id.recyclerview);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        listItem = new ArrayList<>();

        logout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ProfileActivity.this, MainActivity.class);
                intent.putExtra("finish", true); // if you are checking for this in your other Activities
                intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP |
                        Intent.FLAG_ACTIVITY_CLEAR_TASK |
                        Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(intent);
                finish();
            }
        });

        loadRecyclerViewData();








        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch(item.getItemId()) {
                    case R.id.newfeed:
                        Intent intentNewfeed = new Intent(ProfileActivity.this, HomeActivity.class);
                        startActivity(intentNewfeed);
                        break;
                    case R.id.search:
                        Intent intentSearch = new Intent(ProfileActivity.this, SearchActivity.class);
                        startActivity(intentSearch);
                        break;
                    case R.id.add:
                        Intent intentAdd = new Intent(ProfileActivity.this, AddActivity.class);
                        startActivity(intentAdd);
                        break;
                    case R.id.chat:
                        Intent intentChat = new Intent(ProfileActivity.this, ChatActivity.class);
                        startActivity(intentChat);
                        break;
                    case R.id.profile:
//                        Intent intentProfile = new Intent(SearchActivity.this, ProfileActivity.class);
//                        startActivity(intentProfile);
                        break;
                }
                return false;

            }
        });



    }

    private void loadProfileInfo() {
        final ProgressDialog progressDialog = new ProgressDialog(this);
        progressDialog.setMessage("Loading data ... ");
        progressDialog.show();
        String profileUrl = "http://161.202.20.61:5000/user?action=getInfo&name=" + name;

        StringRequest stringRequest = new StringRequest(Request.Method.GET,
                profileUrl,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        progressDialog.dismiss();
                        try {
                            JSONObject jsonObject = new JSONObject(response);
                            birthday.setText(jsonObject.getString("birthday"));
                            String avatarUrl = jsonObject.getString("avatar");
                            Log.d("Avatar", avatarUrl);
                            Picasso.with(ProfileActivity.this).load(avatarUrl).memoryPolicy(MemoryPolicy.NO_CACHE).networkPolicy(NetworkPolicy.NO_CACHE).transform(new CircleTransform()).into(avatar);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError volleyError) {
                        Toast.makeText(getApplicationContext(), volleyError.getMessage(), Toast.LENGTH_SHORT).show();
                    }
                }
        )
        {
            @Override
            public Map<String, String> getHeaders ()throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "JWT " + accessToken);
                Log.d("Header", headers.toString());
                //..add other headers
                return headers;
            }

        };
        RequestQueue requestQueue = Volley.newRequestQueue(this);
        requestQueue.add(stringRequest);
    }

    private void loadRecyclerViewData() {
        final ProgressDialog progressDialog = new ProgressDialog(this);
        progressDialog.setMessage("Loading data ... ");
        progressDialog.show();

        final String baseUrl = "http://161.202.20.61:5000/post" +"?name=" + name +"&postID=" + postID;
        StringRequest stringRequest = new StringRequest(Request.Method.GET,
                baseUrl,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        progressDialog.dismiss();
                        try {
                            JSONObject jsonObject = new JSONObject(response);
                            JSONArray array = jsonObject.getJSONArray("posts");
                            for(int i = 0; i < array.length(); i++) {
                                JSONObject o = array.getJSONObject(i);
                                ProfileData item = new ProfileData(
                                        o.getString("owner"),
                                        o.getString("content"),
                                        o.getString("like"),
                                        o.getString("url"),
                                        o.getString("postID")
                                );
                                listItem.add(item);
                            }
                            adapter = new ProfileDataAdapter(recyclerView, listItem, getApplicationContext());
                            recyclerView.setAdapter(adapter);

                            adapter.setOnLoadMoreListener(new HomeOnLoadMoreListener() {
                                @Override
                                public void onLoadMore() {
                                    listItem.add(null);
                                    adapter.notifyItemInserted(listItem.size() - 1);
                                    new Handler().postDelayed(new Runnable() {
                                        @Override
                                        public void run() {
                                            listItem.remove(listItem.size() - 1);
                                            adapter.notifyItemRemoved(listItem.size());

                                            //Generating more data
                                            postID += 10;
                                            String baseUrl = "http://161.202.20.61:5000/post" +"?name=" + name +"&postID=" + postID;
                                            StringRequest stringRequest = new StringRequest(Request.Method.GET,
                                                    baseUrl,
                                                    new Response.Listener<String>() {
                                                        @Override
                                                        public void onResponse(String response) {
                                                            try {
                                                                JSONObject jsonObject = new JSONObject(response);
                                                                JSONArray array = jsonObject.getJSONArray("posts");

                                                                for (int i = 0; i < array.length(); i++) {
                                                                    Log.d("Array", array.getString(i));
                                                                    JSONObject o = array.getJSONObject(i);
                                                                    ProfileData item = new ProfileData(
                                                                            o.getString("owner"),
                                                                            o.getString("content"),
                                                                            o.getString("like"),
                                                                            o.getString("url"),
                                                                            o.getString("postID")
                                                                    );
                                                                    listItem.add(item);
                                                                }

                                                                adapter.notifyDataSetChanged();
                                                                adapter.setLoaded();

                                                            } catch (Exception e) {
                                                                e.printStackTrace();
                                                            }
                                                        }
                                                    },
                                                    new Response.ErrorListener() {
                                                        @Override
                                                        public void onErrorResponse(VolleyError volleyError) {
                                                            Toast.makeText(getApplicationContext(), volleyError.getMessage(), Toast.LENGTH_SHORT).show();
                                                        }
                                                    }
                                            )
                                            {
                                                @Override
                                                public Map<String, String> getHeaders ()throws AuthFailureError {
                                                    Map<String, String> headers = new HashMap<>();
                                                    headers.put("Authorization", "JWT " + accessToken);
                                                    Log.d("Header", headers.toString());
                                                    return headers;
                                                }

                                            };
                                            RequestQueue requestQueue = Volley.newRequestQueue(getApplicationContext());
                                            requestQueue.add(stringRequest);


                                        }
                                    }, 5000);
                                }
                            });

                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError volleyError) {
                        Toast.makeText(getApplicationContext(), volleyError.getMessage(), Toast.LENGTH_SHORT).show();
                    }
                }
        )
        {
            @Override
            public Map<String, String> getHeaders ()throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "JWT " + accessToken);
                Log.d("Header", headers.toString());
                //..add other headers
                return headers;
            }

        };
        RequestQueue requestQueue = Volley.newRequestQueue(this);
        requestQueue.add(stringRequest);
    }

    private void selectImage() {
        Intent intent = new Intent();
        intent.setType(("image/*"));
        intent.setAction(Intent.ACTION_GET_CONTENT);
        startActivityForResult(intent, IMG_REQUEST);
    }

    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == IMG_REQUEST && resultCode == RESULT_OK && data != null) {
            imgPath = data.getData();
            try {
                bitmap = MediaStore.Images.Media.getBitmap(getContentResolver(), imgPath);
                bitmap = getCircularBitmap(bitmap);
                avatar.setImageBitmap(bitmap);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    public String getPath(Uri uri) {
        Cursor cursor = getContentResolver().query(uri, null, null, null, null);
        cursor.moveToFirst();
        String document_id = cursor.getString(0);
        document_id = document_id.substring(document_id.lastIndexOf(":") + 1);
        cursor.close();

        cursor = getContentResolver().query(
                android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
                null, MediaStore.Images.Media._ID + " = ? ", new String[]{document_id}, null);
        cursor.moveToFirst();
        String path = cursor.getString(cursor.getColumnIndex(MediaStore.Images.Media.DATA));
        cursor.close();

        return path;
    }

    public void changeAvatar() {
        String path = getPath(imgPath);

        //Uploading code
        try {
            String uploadId = UUID.randomUUID().toString();

            //Creating a multi part request
            new MultipartUploadRequest(this, uploadId, "http://161.202.20.61:5000/userimg")
                    .setMethod("POST")
                    .addHeader("Authorization", "JWT " + accessToken)
                    .addFileToUpload(path, "file") //Adding file
                    .setNotificationConfig(new UploadNotificationConfig())
                    .setMaxRetries(2)
                    .startUpload(); //Starting the upload

            Toast.makeText(this, "Changed avatar successfully", Toast.LENGTH_SHORT).show();


        } catch (Exception exc) {
            Toast.makeText(this, exc.getMessage(), Toast.LENGTH_SHORT).show();
        }
    }

    public static Bitmap getCircularBitmap(Bitmap bitmap) {
        Bitmap output;

        if (bitmap.getWidth() > bitmap.getHeight()) {
            output = Bitmap.createBitmap(bitmap.getHeight(), bitmap.getHeight(), Bitmap.Config.ARGB_8888);
        } else {
            output = Bitmap.createBitmap(bitmap.getWidth(), bitmap.getWidth(), Bitmap.Config.ARGB_8888);
        }

        Canvas canvas = new Canvas(output);

        final int color = 0xff424242;
        final Paint paint = new Paint();
        final Rect rect = new Rect(0, 0, bitmap.getWidth(), bitmap.getHeight());

        float r = 0;

        if (bitmap.getWidth() > bitmap.getHeight()) {
            r = bitmap.getHeight() / 2;
        } else {
            r = bitmap.getWidth() / 2;
        }

        paint.setAntiAlias(true);
        canvas.drawARGB(0, 0, 0, 0);
        paint.setColor(color);
        canvas.drawCircle(r, r, r, paint);
        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SRC_IN));
        canvas.drawBitmap(bitmap, rect, rect, paint);
        return output;
    }

    @Override
    public void onClick(View v) {
        if ( v == avatar ) {
            selectImage();
            followText.setText("Change Avatar");
            followText.setVisibility(View.VISIBLE);
        }
        if ( v == followText) {
            changeAvatar();
            loadProfileInfo();
        }
    }

}


