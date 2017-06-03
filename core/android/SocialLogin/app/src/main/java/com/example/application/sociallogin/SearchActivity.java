package com.example.application.sociallogin;

import android.app.ProgressDialog;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.HttpHeaderParser;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class SearchActivity extends AppCompatActivity {
    EditText searchName;
    RelativeLayout userInfo;
    Button search;
    ImageView avatar;
    TextView name;
    TextView followingNum;
    TextView followerNum;
    String userName;
    String accessToken = Singleton.getInstance().getAccessToken();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_search);

        BottomNavigationView bottomNavigationView = (BottomNavigationView) findViewById(R.id.bottomNavView_Bar);
        BottomNavigationViewHelper.disableShiftMode(bottomNavigationView);

        Menu menu = bottomNavigationView.getMenu();
        MenuItem menuItem = menu.getItem(1);
        menuItem.setChecked(true);

        searchName = (EditText) findViewById(R.id.nameSearch);
        userInfo = (RelativeLayout) findViewById(R.id.userprofileInfo);
        search = (Button) findViewById(R.id.buttonSearch);

        avatar = (ImageView) findViewById(R.id.avatar);
        name = (TextView) findViewById(R.id.username);
        followingNum = (TextView) findViewById(R.id.followingNumber);
        followerNum = (TextView) findViewById(R.id.followerNumber);




        userInfo.setVisibility(View.GONE);

        search.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                userName = searchName.getText().toString();
                final ProgressDialog progressDialog = new ProgressDialog(SearchActivity.this);
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
                                    JSONArray followingArray = jsonObject.getJSONArray("followings_name");
                                    JSONArray followerArray = jsonObject.getJSONArray("followers_name");

                                   //Set value to layout
                                    followerNum.setText(String.valueOf(followerArray.length()));
                                    followingNum.setText(String.valueOf(followingArray.length()));
                                    name.setText(jsonObject.getString("name"));
                                    Picasso.with(SearchActivity.this).load(jsonObject.getString("avatar")).transform(new CircleTransform()).into(avatar);

                                    //Add click event for avatar and name
                                    intentToProfile(name);
                                    intentToProfile(avatar);

                                } catch (Exception e) {
                                    e.printStackTrace();
                                }
                                userInfo.setVisibility(View.VISIBLE);
                            }
                        },
                        new Response.ErrorListener() {
                            @Override
                            public void onErrorResponse(VolleyError volleyError) {
                                progressDialog.dismiss();
                                Toast.makeText(getApplicationContext(), "No user found", Toast.LENGTH_SHORT).show();
                                userInfo.setVisibility(View.GONE);
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
                RequestQueue requestQueue = Volley.newRequestQueue(SearchActivity.this);
                requestQueue.add(stringRequest);



            }
        });














        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch(item.getItemId()) {
                    case R.id.newfeed:
                        Intent intentNewfeed = new Intent(SearchActivity.this, HomeActivity.class);
                        startActivity(intentNewfeed);
                        break;
                    case R.id.search:
//                        Intent intentSearch = new Intent(SearchActivity.this, HomeActivity.class);
//                        startActivity(intentSearch);
                        break;
                    case R.id.add:
                        Intent intentAdd = new Intent(SearchActivity.this, AddActivity.class);
                        startActivity(intentAdd);
                        break;
                    case R.id.chat:
                        Intent intentChat = new Intent(SearchActivity.this, ChatActivity.class);
                        startActivity(intentChat);
                        break;
                    case R.id.profile:
                        Intent intentProfile = new Intent(SearchActivity.this, ProfileActivity.class);
                        startActivity(intentProfile);
                        break;
                }
                return false;

            }
        });
    }

    public void intentToProfile(TextView text) {
        text.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent userprofileIntent = new Intent(SearchActivity.this, UserProfileActivity.class);
                userprofileIntent.putExtra("name", userName);
                startActivity(userprofileIntent);
            }
        });
    }

    public void intentToProfile(ImageView image) {
        image.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent userprofileIntent = new Intent(SearchActivity.this, UserProfileActivity.class);
                userprofileIntent.putExtra("name", userName);
                startActivity(userprofileIntent);
            }
        });
    }
}
