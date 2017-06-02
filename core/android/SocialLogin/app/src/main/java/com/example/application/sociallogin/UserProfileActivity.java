package com.example.application.sociallogin;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Handler;
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
import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONObject;
import org.w3c.dom.Text;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserProfileActivity extends AppCompatActivity {
    TextView username;
    TextView birthday;
    ImageView avatar;
    TextView followText;
    TextView likeText;
    String userName;
    String accessToken = Singleton.getInstance().getAccessToken();
    private int postID = 0;
    private UserProfileDataAdapter adapter;
    private RecyclerView recyclerView;
    List<UserProfileData> listItem;
    private boolean isFollowed = false;
    private boolean isCurrentUser = true;
    private boolean isLiked = false;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_userprofile);

        BottomNavigationView bottomNavigationView = (BottomNavigationView) findViewById(R.id.bottomNavView_Bar);
        BottomNavigationViewHelper.disableShiftMode(bottomNavigationView);

        Intent userprofileIntent = getIntent();
        Bundle b = userprofileIntent.getExtras();
        userName = (String) b.get("name");

        username = (TextView) findViewById(R.id.username);
        birthday = (TextView) findViewById(R.id.birthday) ;
        avatar = (ImageView) findViewById(R.id.avatar);
        followText = (TextView) findViewById(R.id.followText);
        likeText = (TextView) findViewById(R.id.like);

        username.setText(userName);

        loadProfileInfo();

        recyclerView = (RecyclerView) findViewById(R.id.recyclerview);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        listItem = new ArrayList<>();

        loadRecyclerViewData();

        if(!isLiked){

        } else {
            likeText.setText("UNLIKE");
        }






        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch(item.getItemId()) {
                    case R.id.newfeed:
                        Intent intentNewfeed = new Intent(UserProfileActivity.this, HomeActivity.class);
                        startActivity(intentNewfeed);
                        break;
                    case R.id.search:
                        Intent intentSearch = new Intent(UserProfileActivity.this, HomeActivity.class);
                        startActivity(intentSearch);
                        break;
                    case R.id.add:
                        Intent intentAdd = new Intent(UserProfileActivity.this, AddActivity.class);
                        startActivity(intentAdd);
                        break;
                    case R.id.chat:
                        Intent intentChat = new Intent(UserProfileActivity.this, ChatActivity.class);
                        startActivity(intentChat);
                        break;
                    case R.id.profile:
                        Intent intentProfile = new Intent(UserProfileActivity.this, ProfileActivity.class);
                        startActivity(intentProfile);
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
        String profileUrl = "http://161.202.20.61:5000/user?action=getInfo&name=" + userName;

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
                            Log.d("Avatar Url", avatarUrl);
//                            if((avatarUrl.substring(avatarUrl.length() - 4)).equals(".jpg")) {
                                Picasso.with(UserProfileActivity.this).load(avatarUrl).transform(new CircleTransform()).into(avatar);
//                            } else {
//                                Picasso.with(UserProfileActivity.this).load(R.drawable.noavatar).transform(new CircleTransform()).into(avatar);
//                            }


                            // Get list of follower
                            JSONArray arrayFollower = jsonObject.getJSONArray("followers_name");
                            for (int i = 0; i < arrayFollower.length(); i++) {
                                if(userName.equals(Singleton.getInstance().getUsername())) {
                                    isFollowed = false;
                                    followText.setVisibility(View.GONE);
                                    break;
                                }
                                if(userName.equals(arrayFollower.getString(i))) {
                                    isFollowed = true;
                                    break;
                                }

                            }

                            if(isFollowed) {
                                followText.setText("Followed");
                            }


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

        final String baseUrl = "http://161.202.20.61:5000/post" +"?name=" + userName +"&postID=" + postID;
        StringRequest stringRequest = new StringRequest(Request.Method.GET,
                baseUrl,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        progressDialog.dismiss();
                        try {
                            JSONObject jsonObject = new JSONObject(response);
                            final JSONArray array = jsonObject.getJSONArray("posts");
                            for(int i = 0; i < array.length(); i++) {
                                JSONObject o = array.getJSONObject(i);
                                UserProfileData item = new UserProfileData(
                                        o.getString("owner"),
                                        o.getString("content"),
                                        o.getString("like"),
                                        o.getString("url"),
                                        o.getString("postID")
                                );
                                listItem.add(item);
                                //Finish getting item
                            }
                            adapter = new UserProfileDataAdapter(recyclerView, listItem, getApplicationContext());
                            recyclerView.setAdapter(adapter);

                            //Getting next data after generating first 10 data
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
                                            String baseUrl = "http://161.202.20.61:5000/post" +"?name=" + userName +"&postID=" + postID;
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
                                                                    UserProfileData item = new UserProfileData(
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
}
