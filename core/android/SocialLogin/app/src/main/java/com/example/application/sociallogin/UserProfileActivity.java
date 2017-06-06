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
import com.android.volley.VolleyLog;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.squareup.picasso.MemoryPolicy;
import com.squareup.picasso.NetworkPolicy;
import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
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
    public boolean isFollowed = false;

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



        recyclerView = (RecyclerView) findViewById(R.id.recyclerview);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        listItem = new ArrayList<>();


        // Load profile info
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

                            Picasso.with(UserProfileActivity.this).load(avatarUrl).memoryPolicy(MemoryPolicy.NO_CACHE).networkPolicy(NetworkPolicy.NO_CACHE).transform(new CircleTransform()).into(avatar);


                            // Get list of followings
                            JSONArray arrayFollowing = jsonObject.getJSONArray("followings_name");
                            Log.d("followings_name", arrayFollowing.toString());
                            if(arrayFollowing.length() == 1 && Singleton.getInstance().getUsername().equals(arrayFollowing.getString(0)) ||
                                    Singleton.getInstance().getUsername().equals(userName)) {
                                isFollowed = false;
                                followText.setVisibility(View.GONE);
                                loadRecyclerViewData();
                                Log.d("isFollowed", String.valueOf(isFollowed));
                            } else if (arrayFollowing.length() == 1) {
                                isFollowed = false;
                                followText.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View v) {
                                        final ProgressDialog progressDialog = new ProgressDialog(UserProfileActivity.this);
                                        progressDialog.setMessage("Loading data ... ");
                                        progressDialog.show();
                                        String followUrl = "http://161.202.20.61:5000/flwuser";
                                        try {
                                            JSONObject jsonBody = new JSONObject();
                                            jsonBody.put("following", userName);
                                            final String requestBody = jsonBody.toString();
                                            StringRequest stringRequest = new StringRequest(Request.Method.POST,
                                                    followUrl,
                                                    new Response.Listener<String>() {
                                                        @Override
                                                        public void onResponse(String response) {
                                                            progressDialog.dismiss();
                                                            followText.setText("Followed");
                                                            isFollowed = true;
                                                            loadRecyclerViewData();
                                                        }
                                                    },
                                                    new Response.ErrorListener() {
                                                        @Override
                                                        public void onErrorResponse(VolleyError volleyError) {
                                                            progressDialog.dismiss();
                                                        }
                                                    }
                                            ) {

                                                @Override
                                                public String getBodyContentType() {
                                                    return "application/json; charset=utf-8";
                                                }

                                                @Override
                                                public byte[] getBody() throws AuthFailureError {
                                                    try {
                                                        return requestBody == null ? null : requestBody.getBytes("utf-8");
                                                    } catch (UnsupportedEncodingException uee) {
                                                        VolleyLog.wtf("Unsupported Encoding while trying to get the bytes of %s using %s", requestBody, "utf-8");
                                                        return null;
                                                    }
                                                }

                                                @Override
                                                public Map<String, String> getHeaders() throws AuthFailureError {
                                                    Map<String, String> headers = new HashMap<>();
                                                    headers.put("Authorization", "JWT " + accessToken);
                                                    return headers;
                                                }


                                            };
                                            RequestQueue requestQueue = Volley.newRequestQueue(UserProfileActivity.this);
                                            requestQueue.add(stringRequest);

                                        }catch (Exception e) {
                                            e.printStackTrace();
                                        }
                                    }
                                });
                            } else {
                                for (int i = 0; i < arrayFollowing.length(); i++) {
                                    if (Singleton.getInstance().getUsername().equals(arrayFollowing.getString(i))) {
                                        isFollowed = true;
                                        followText.setText("Followed");
                                        loadRecyclerViewData();
                                        break;
                                    } else {
                                        isFollowed = false;
                                    }
                                }

                            }
                           Log.d("isFollowed", String.valueOf(isFollowed));

                                if (!isFollowed) {
                                    followText.setOnClickListener(new View.OnClickListener() {
                                        @Override
                                        public void onClick(View v) {
                                            final ProgressDialog progressDialog = new ProgressDialog(UserProfileActivity.this);
                                            progressDialog.setMessage("Loading data ... ");
                                            progressDialog.show();
                                            String followUrl = "http://161.202.20.61:5000/flwuser";
                                            try {
                                                JSONObject jsonBody = new JSONObject();
                                                jsonBody.put("following", userName);
                                                final String requestBody = jsonBody.toString();
                                                StringRequest stringRequest = new StringRequest(Request.Method.POST,
                                                        followUrl,
                                                        new Response.Listener<String>() {
                                                            @Override
                                                            public void onResponse(String response) {
                                                                progressDialog.dismiss();
                                                                followText.setText("Followed");
                                                                loadRecyclerViewData();
                                                            }
                                                        },
                                                        new Response.ErrorListener() {
                                                            @Override
                                                            public void onErrorResponse(VolleyError volleyError) {
                                                                progressDialog.dismiss();
                                                            }
                                                        }
                                                ) {

                                                    @Override
                                                    public String getBodyContentType() {
                                                        return "application/json; charset=utf-8";
                                                    }

                                                    @Override
                                                    public byte[] getBody() throws AuthFailureError {
                                                        try {
                                                            return requestBody == null ? null : requestBody.getBytes("utf-8");
                                                        } catch (UnsupportedEncodingException uee) {
                                                            VolleyLog.wtf("Unsupported Encoding while trying to get the bytes of %s using %s", requestBody, "utf-8");
                                                            return null;
                                                        }
                                                    }

                                                    @Override
                                                    public Map<String, String> getHeaders() throws AuthFailureError {
                                                        Map<String, String> headers = new HashMap<>();
                                                        headers.put("Authorization", "JWT " + accessToken);
                                                        return headers;
                                                    }


                                                };
                                                RequestQueue requestQueue = Volley.newRequestQueue(UserProfileActivity.this);
                                                requestQueue.add(stringRequest);

                                            } catch (Exception e) {
                                                e.printStackTrace();
                                            }
                                        }
                                    });
                                    isFollowed = true;
                                } else {
                                    followText.setOnClickListener(new View.OnClickListener() {
                                        @Override
                                        public void onClick(View v) {
                                            final ProgressDialog progressDialog = new ProgressDialog(UserProfileActivity.this);
                                            progressDialog.setMessage("Loading data ... ");
                                            progressDialog.show();
                                            String unfollowUrl = "http://161.202.20.61:5000/unflwuser";
                                            try {
                                                JSONObject jsonBody = new JSONObject();
                                                jsonBody.put("unfollowing", userName);
                                                final String requestBody = jsonBody.toString();
                                                StringRequest stringRequest = new StringRequest(Request.Method.POST,
                                                        unfollowUrl,
                                                        new Response.Listener<String>() {
                                                            @Override
                                                            public void onResponse(String response) {
                                                                progressDialog.dismiss();
                                                                followText.setText("Follow");
                                                            }
                                                        },
                                                        new Response.ErrorListener() {
                                                            @Override
                                                            public void onErrorResponse(VolleyError volleyError) {
                                                                progressDialog.dismiss();
                                                            }
                                                        }
                                                ) {

                                                    @Override
                                                    public String getBodyContentType() {
                                                        return "application/json; charset=utf-8";
                                                    }

                                                    @Override
                                                    public byte[] getBody() throws AuthFailureError {
                                                        try {
                                                            return requestBody == null ? null : requestBody.getBytes("utf-8");
                                                        } catch (UnsupportedEncodingException uee) {
                                                            VolleyLog.wtf("Unsupported Encoding while trying to get the bytes of %s using %s", requestBody, "utf-8");
                                                            return null;
                                                        }
                                                    }

                                                    @Override
                                                    public Map<String, String> getHeaders() throws AuthFailureError {
                                                        Map<String, String> headers = new HashMap<>();
                                                        headers.put("Authorization", "JWT " + accessToken);
                                                        return headers;
                                                    }


                                                };
                                                RequestQueue requestQueue = Volley.newRequestQueue(UserProfileActivity.this);
                                                requestQueue.add(stringRequest);

                                            } catch (Exception e) {
                                                e.printStackTrace();
                                            }
                                        }
                                    });
                                    isFollowed = false;
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
                return headers;
            }

        };
        RequestQueue requestQueue = Volley.newRequestQueue(this);
        requestQueue.add(stringRequest);




        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch(item.getItemId()) {
                    case R.id.newfeed:
                        Intent intentNewfeed = new Intent(UserProfileActivity.this, HomeActivity.class);
                        startActivity(intentNewfeed);
                        break;
                    case R.id.search:
                        Intent intentSearch = new Intent(UserProfileActivity.this, SearchActivity.class);
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


    public void loadRecyclerViewData() {
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
