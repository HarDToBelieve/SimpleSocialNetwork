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
import android.widget.Toast;
import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import org.json.JSONArray;
import org.json.JSONObject;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class HomeActivity extends AppCompatActivity {
    Integer postID = 0;
    String accessToken;
    String username;
    private boolean isLiked = false;
    private RecyclerView recyclerView;
    private HomeDataAdapter adapter;
    private List<HomeData> listItem;
    private String newfeedURL = "http://161.202.20.61:5000/postnewfeed";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_home);


        BottomNavigationView bottomNavigationView = (BottomNavigationView) findViewById(R.id.bottomNavView_Bar);
        BottomNavigationViewHelper.disableShiftMode(bottomNavigationView);

        Menu menu = bottomNavigationView.getMenu();
        MenuItem menuItem = menu.getItem(0);
        menuItem.setChecked(true);

        recyclerView = (RecyclerView) findViewById(R.id.recyclerview);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        listItem = new ArrayList<>();

        accessToken = Singleton.getInstance().getAccessToken();
        username = Singleton.getInstance().getUsername();
        Log.d("access_token", accessToken);

        loadRecyclerViewData();











        // Bottom nav bar
        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch (item.getItemId()) {
                    case R.id.newfeed:
//                        Intent intentNewfeed = new Intent(HomeActivity.this, HomeActivity.class);
//                        startActivity(intentNewfeed);
                        break;
                    case R.id.search:
                        Intent intentSearch = new Intent(HomeActivity.this, SearchActivity.class);
                        startActivity(intentSearch);
                        break;
                    case R.id.add:
                        Intent intentAdd = new Intent(HomeActivity.this, AddActivity.class);
                        startActivity(intentAdd);
                        break;
                    case R.id.chat:
                        Intent intentChat = new Intent(HomeActivity.this, ChatActivity.class);
                        startActivity(intentChat);
                        break;
                    case R.id.profile:
                        Intent intentProfile = new Intent(HomeActivity.this, ProfileActivity.class);
                        startActivity(intentProfile);
                        break;
                }
                return false;

            }
        });


    }


    private void loadRecyclerViewData() {
        final ProgressDialog progressDialog = new ProgressDialog(this);
        progressDialog.setMessage("Loading data ... ");
        progressDialog.show();

        newfeedURL = newfeedURL +"?name=" + username +"&postID=" + postID;
        StringRequest stringRequest = new StringRequest(Request.Method.GET,
                newfeedURL,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        progressDialog.dismiss();
                        try {
                            JSONObject jsonObject = new JSONObject(response);
                            JSONArray array = jsonObject.getJSONArray("posts");
                            for(int i = 0; i < array.length(); i++) {
                                JSONObject o = array.getJSONObject(i);
                                HomeData item = new HomeData(
                                        o.getString("owner"),
                                        o.getString("content"),
                                        o.getString("like"),
                                        o.getString("url"),
                                        o.getString("postID")
                                );
                                listItem.add(item);
                            }

                            adapter = new HomeDataAdapter(recyclerView, listItem, getApplicationContext());
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
                                            newfeedURL = "http://161.202.20.61:5000/postnewfeed" +"?name=" + username +"&postID=" + postID;
                                            StringRequest stringRequest = new StringRequest(Request.Method.GET,
                                                    newfeedURL,
                                                    new Response.Listener<String>() {
                                                        @Override
                                                        public void onResponse(String response) {
                                                            try {
                                                                JSONObject jsonObject = new JSONObject(response);
                                                                JSONArray array = jsonObject.getJSONArray("posts");

                                                                for (int i = 0; i < array.length(); i++) {
                                                                    JSONObject o = array.getJSONObject(i);
                                                                    HomeData item = new HomeData(
                                                                            o.getString("owner"),
                                                                            o.getString("content"),
                                                                            o.getString("like"),
                                                                            o.getString("url"),
                                                                            o.getString("postID")
                                                                    );
                                                                    listItem.add(item);
                                                                    //Finish adding item


                                                                    //check if liked

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
                return headers;
        }

    };
        RequestQueue requestQueue = Volley.newRequestQueue(this);
        requestQueue.add(stringRequest);
    }


}
