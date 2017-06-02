package com.example.application.sociallogin;

import android.app.Activity;
import android.content.Intent;
import android.icu.util.Output;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Debug;
import android.util.Log;
import android.view.View;
import android.view.Window;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;


import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.net.ssl.HttpsURLConnection;


public class MainActivity extends Activity {
    private TextView signupLink;
    private TextView signupQuestion;
    EditText userName;
    EditText userPassword;
    public JSONObject object;
    public static String accessToken;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        requestWindowFeature(Window.FEATURE_NO_TITLE);

        setContentView(R.layout.activity_main);

        userName = (EditText) findViewById(R.id.userName);

        userPassword = (EditText) findViewById(R.id.userPassword);


        Button loginButton = (Button) findViewById(R.id.buttonLogin);
        signupLink = (TextView) findViewById(R.id.signupText);
        signupQuestion = (TextView) findViewById(R.id.signupQuestion);


        signupLink.setOnClickListener(
                new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        Intent signupIntent = new Intent(MainActivity.this, RegisterActivity.class);
                        MainActivity.this.startActivity(signupIntent);
                    }
                }
        );

        loginButton.setOnClickListener(
                new Button.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        String name = userName.getText().toString();
                        String password = userPassword.getText().toString();
                        if (userName.getText().length() == 0 && userPassword.getText().length() == 0) {
                            userName.setError("Cannot be blank");
                            userPassword.setError("Cannot be blank");
                            return;
                        }
                        if (userName.getText().length() == 0 && userPassword.getText().length() != 0) {
                            userName.setError("Cannot be blank");
                            return;
                        }
                        if (userName.getText().length() != 0 && userPassword.getText().length() == 0) {
                            userPassword.setError("Cannot be blank");
                            return;
                        }
                        // Create JSONObject
                        JSONObject info = new JSONObject();
                        try {
                            info.put("username", name);
                            info.put("password", password);
                            Log.d("json api", "json object converted from array: " + info.toString());
                            Singleton.getInstance().setUsername(userName.getText().toString());
                            new DoLogin().execute(info.toString());


                        } catch(JSONException e) {
                            e.printStackTrace();
                        }

                    }
                }
        );
    }

//    public String getPostDataString(JSONObject params) throws Exception {
//
//        StringBuilder result = new StringBuilder();
//        boolean first = true;
//
//        Iterator<String> itr = params.keys();
//
//        while(itr.hasNext()){
//
//            String key= itr.next();
//            Object value = params.get(key);
//
//            if (first)
//                first = false;
//            else
//                result.append("&");
//
//            result.append(URLEncoder.encode(key, "UTF-8"));
//            result.append("=");
//            result.append(URLEncoder.encode(value.toString(), "UTF-8"));
//
//        }
//        return result.toString();
//    }

    //Another way
    class DoLogin extends AsyncTask<String, String, String> {
        @Override
        protected String doInBackground(String... params) {
            String jsonData = params[0];
            Log.d("json request", jsonData);
            try {
                URL url = new URL("http://161.202.20.61:5000/auth");
                HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
                httpURLConnection.setRequestMethod("POST");
                httpURLConnection.setDoInput(true);
                httpURLConnection.setDoOutput(true);
                httpURLConnection.setRequestProperty("Content-type", "application/json");
//                httpURLConnection.connect();


                //send data
                OutputStream dos = httpURLConnection.getOutputStream();
                dos.write(jsonData.getBytes());

                //received and read data
                InputStream is;
                int status = httpURLConnection.getResponseCode();
                String result = "";
                int byteCharacter;

                if(status != HttpURLConnection.HTTP_OK) {
                   return String.valueOf(status);
                }

                is = httpURLConnection.getInputStream();

                while((byteCharacter = is.read()) != -1) {
                        result += (char) byteCharacter;
                }
                Log.d("json api", "DoLogin.doInBackground return: " + result);

                JSONObject obj = new JSONObject(result);
                String accessToken = obj.getString("access_token");

                Log.d("access_token", accessToken);

                is.close();
                dos.close();
                httpURLConnection.disconnect();
                return accessToken;
            } catch(Exception e) {
                e.printStackTrace();
            }
            return null;
        }

        @Override
        protected void onPostExecute(String response) {
            super.onPostExecute(response);

            if(response.equals("401")) {
                Toast.makeText(MainActivity.this, "Wrong Username/Password", Toast.LENGTH_SHORT).show();
            } else {
                accessToken = response;
                Singleton.getInstance().setAccessToken(accessToken);
                Intent homeIntent = new Intent(getApplicationContext(), HomeActivity.class);
//                Bundle accessTokenBundle = new Bundle();
//                accessTokenBundle.putString("access_token", response);
//                homeIntent.putExtras(accessTokenBundle);
                MainActivity.this.startActivity(homeIntent);
            }

        }
    }
}
