package com.example.application.sociallogin;

import android.app.ProgressDialog;
import android.content.Intent;
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
import android.widget.EditText;
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
import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class CommentActivity extends AppCompatActivity {
    String postID;
    String userName = Singleton.getInstance().getUsername();
    String accessToken = Singleton.getInstance().getAccessToken();
    EditText contentInput;
    TextView sendButton;
    TextView name;
    String content;
    Date today = new Date();
    String date = today.toString();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_comment);

        BottomNavigationView bottomNavigationView = (BottomNavigationView) findViewById(R.id.bottomNavView_Bar);
        BottomNavigationViewHelper.disableShiftMode(bottomNavigationView);

        sendButton = (TextView) findViewById(R.id.commentButton);
        name = (TextView) findViewById(R.id.name);
        name.setText(userName);

        contentInput = (EditText) findViewById(R.id.content);


        Intent commentIntent = getIntent();
        Bundle b = commentIntent.getExtras();
        postID = (String) b.get("postID");
        Log.d("postID", postID);
        initView();

        sendButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                content = contentInput.getText().toString();
                if(content.isEmpty()) {
                    contentInput.setError("Can not be blank");
                    return;
                }
                final ProgressDialog progressDialog = new ProgressDialog(CommentActivity.this);
                progressDialog.setMessage("Loading data ... ");
                progressDialog.show();
                String commentUrl = "http://161.202.20.61:5000/postcmt";
                try {
                    JSONObject jsonBody = new JSONObject();
                    jsonBody.put("content", content);
                    jsonBody.put("owner", userName);
                    jsonBody.put("date", date);
                    jsonBody.put("postID", postID);
                    final String requestBody = jsonBody.toString();
                    StringRequest stringRequest = new StringRequest(Request.Method.POST,
                            commentUrl,
                            new Response.Listener<String>() {

                                @Override
                                public void onResponse(String response) {
                                    progressDialog.dismiss();
                                    initView();
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
                    RequestQueue requestQueue = Volley.newRequestQueue(CommentActivity.this);
                    requestQueue.add(stringRequest);

                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });





        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch(item.getItemId()) {
                    case R.id.newfeed:
                        Intent intentNewfeed = new Intent(CommentActivity.this, HomeActivity.class);
                        startActivity(intentNewfeed);
                        break;
                    case R.id.search:
                        Intent intentSearch = new Intent(CommentActivity.this, SearchActivity.class);
                        startActivity(intentSearch);
                        break;
                    case R.id.add:
                        Intent intentAdd = new Intent(CommentActivity.this,AddActivity.class);
                        startActivity(intentAdd);
                        break;
                    case R.id.chat:
                        Intent intentChat = new Intent(CommentActivity.this, ChatActivity.class);
                        startActivity(intentChat);
                        break;
                    case R.id.profile:
                        Intent intentProfile = new Intent(CommentActivity.this, ProfileActivity.class);
                        startActivity(intentProfile);
                        break;
                }
                return false;

            }
        });

    }


    public void initView() {
        final RecyclerView recyclerView = (RecyclerView) findViewById(R.id.recyclerview);
        recyclerView.setHasFixedSize(true);
        LinearLayoutManager layoutManager = new LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false);
        recyclerView.setLayoutManager(layoutManager);
        final  ArrayList<CommentData> arrayList = new ArrayList<>();

        //Get data from server
        final ProgressDialog progressDialog = new ProgressDialog(this);
        progressDialog.setMessage("Loading data ... ");
        progressDialog.show();
        String cmtUrl = "http://161.202.20.61:5000/postcmt?postID=" + postID;
        StringRequest stringRequest = new StringRequest(Request.Method.GET,
                cmtUrl,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        progressDialog.dismiss();
                        try {
                            JSONObject jsonObject = new JSONObject(response);
                            JSONArray commentList = jsonObject.getJSONArray("Comment");
                            for(int i = 0; i < commentList.length(); i++) {
                                JSONObject o = commentList.getJSONObject(i);
                                CommentData item = new CommentData(
                                        o.getString("owner"),
                                        o.getString("content")
                                );
                                arrayList.add(item);
                            }
                            CommentDataAdapter adapter = new CommentDataAdapter(arrayList, getApplicationContext());
                            recyclerView.setAdapter(adapter);
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
