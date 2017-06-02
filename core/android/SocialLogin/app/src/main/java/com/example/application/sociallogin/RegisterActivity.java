package com.example.application.sociallogin;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.icu.util.Calendar;
import android.net.Uri;
import android.os.AsyncTask;
import android.provider.MediaStore;
import android.support.annotation.NonNull;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Base64;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONObject;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import static com.example.application.sociallogin.R.id.buttonSignup;
import static com.example.application.sociallogin.R.id.signupUsername;

public class RegisterActivity extends AppCompatActivity {
    private EditText signupName;
    private EditText signupPassword;
    private EditText signupDate;
    private EditText signupMonth;
    private EditText signupYear;
    private ImageView signupAvatar;
    private TextView signupProfilePicture;
    private final int IMG_REQUEST = 1;
    private Bitmap bitmap;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        getSupportActionBar().setDisplayOptions(ActionBar.DISPLAY_SHOW_CUSTOM);
        getSupportActionBar().setCustomView(R.layout.activity_register_title);

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        signupName = (EditText) findViewById(R.id.signupUsername);
        signupPassword = (EditText) findViewById(R.id.signupPassword);
        signupDate = (EditText) findViewById(R.id.date);
        signupMonth = (EditText) findViewById(R.id.month);
        signupYear = (EditText) findViewById(R.id.year);
//        signupProfilePicture = (TextView) findViewById(R.id.profilePicture);
//        signupAvatar = (ImageView) findViewById(R.id.uploadAvatar);

        final Button buttonSignup = (Button) findViewById(R.id.buttonSignup);

//        signupAvatar.setOnClickListener(
//                new View.OnClickListener() {
//                    @Override
//                    public void onClick(View view) {
//                        selectImage();
//                    }
//                }
//        );

        buttonSignup.setOnClickListener(
                new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        if(signupName.getText().length() == 0) {
                            signupName.setError("Cannot leave blank");
                            return;
                        }
                        if(signupPassword.getText().length() == 0) {
                            signupPassword.setError("Cannot leave blank");
                            return;
                        }
                        if(signupDate.getText().length() == 0) {
                            signupDate.setError("Cannot leave blank");
                            return;
                        } else if (Integer.parseInt(signupDate.getText().toString()) < 1 || Integer.parseInt(signupDate.getText().toString()) > 31) {
                            signupDate.setError("Error input date");
                            return;
                        }
                        if(signupMonth.getText().length() == 0) {
                            signupMonth.setError("Cannot leave blank");
                            return;
                        } else if (Integer.parseInt(signupMonth.getText().toString()) < 1 || Integer.parseInt(signupMonth.getText().toString()) > 12) {
                            signupMonth.setError("Error input month");
                            return;
                        }
                        if(signupYear.getText().length() == 0) {
                            signupYear.setError("Cannot leave blank");
                            return;
                        } else if (Integer.parseInt(signupYear.getText().toString()) < 1900 || Integer.parseInt(signupMonth.getText().toString()) > 2017) {
                            signupYear.setError("Error input year");
                            return;
                        }
//                        else if (bitmap == null) {
//                            Toast imgProfileToast = Toast.makeText(RegisterActivity.this, "Blank profile picture",
//                                    Toast.LENGTH_SHORT);
//                            imgProfileToast.setGravity(Gravity.LEFT|Gravity.CENTER_HORIZONTAL, 275, 300);
//                            imgProfileToast.show();
//                            return;
//                        }
                        JSONObject infoReg = new JSONObject();
                        try {
                            infoReg.put("username", signupName.getText().toString());
                            infoReg.put("password", signupPassword.getText().toString());
                            infoReg.put("birthday", signupDate.getText().toString() + '-' + signupMonth.getText().toString() + '-' + signupYear.getText().toString());
//                            infoReg.put("image", imageToString(bitmap));
                            Log.d("json api", "json object converted from array: " + infoReg.toString());
                            new DoReg().execute(infoReg.toString());
                        } catch(Exception e) {
                            e.printStackTrace();;
                        }
                    }
                }
        );

    }

    class DoReg extends AsyncTask<String, Integer, Integer> {


        @Override
        protected Integer doInBackground(String... params) {
            String jsonData = params[0];
            Log.d("json request", jsonData);
            try {
                URL url = new URL("http://161.202.20.61:5000/reguser");
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

                int status = httpURLConnection.getResponseCode();

                Log.d("json api", "DoLogin.doInBackground return: " + status);




                dos.close();
                httpURLConnection.disconnect();
                return status;
            } catch(Exception e) {
                e.printStackTrace();
            }
            return null;
        }

        @Override
        protected void onPostExecute(Integer status) {
            super.onPostExecute(status);
            if (status == 201) {
                Toast.makeText(RegisterActivity.this, "Success",
                        Toast.LENGTH_SHORT).show();
                Intent returnLoginScreen = new Intent(RegisterActivity.this, MainActivity.class);
                RegisterActivity.this.startActivity(returnLoginScreen);
            } else if (status == 409){
                Toast.makeText(RegisterActivity.this, "User has already existed", Toast.LENGTH_SHORT).show();
            } else {
                Toast.makeText(RegisterActivity.this, "Wrong input in Username/Password", Toast.LENGTH_SHORT).show();
            }

        }
    }


//    private void selectImage() {
//        Intent intent = new Intent();
//        intent.setType(("image/*"));
//        intent.setAction(Intent.ACTION_GET_CONTENT);
//        startActivityForResult(intent, IMG_REQUEST);
//    }

//    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
//        super.onActivityResult(requestCode, resultCode, data);
//        if(requestCode == IMG_REQUEST && resultCode == RESULT_OK && data != null) {
//            Uri path = data.getData();
//            try {
//                bitmap = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
//                bitmap = getCircularBitmap(bitmap);
//                signupAvatar.setImageBitmap(bitmap);
//
//            } catch (Exception e) {
//
//            }
//        }
//    }

//    private String imageToString(Bitmap bitmap) {
//        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
//        bitmap.compress(Bitmap.CompressFormat.JPEG, 100, byteArrayOutputStream);
//        byte[] imgBytes = byteArrayOutputStream.toByteArray();
//        return Base64.encodeToString(imgBytes, Base64.DEFAULT);
//    }
//
//    public static Bitmap getCircularBitmap(Bitmap bitmap) {
//        Bitmap output;
//
//        if (bitmap.getWidth() > bitmap.getHeight()) {
//            output = Bitmap.createBitmap(bitmap.getHeight(), bitmap.getHeight(), Bitmap.Config.ARGB_8888);
//        } else {
//            output = Bitmap.createBitmap(bitmap.getWidth(), bitmap.getWidth(), Bitmap.Config.ARGB_8888);
//        }
//
//        Canvas canvas = new Canvas(output);
//
//        final int color = 0xff424242;
//        final Paint paint = new Paint();
//        final Rect rect = new Rect(0, 0, bitmap.getWidth(), bitmap.getHeight());
//
//        float r = 0;
//
//        if (bitmap.getWidth() > bitmap.getHeight()) {
//            r = bitmap.getHeight() / 2;
//        } else {
//            r = bitmap.getWidth() / 2;
//        }
//
//        paint.setAntiAlias(true);
//        canvas.drawARGB(0, 0, 0, 0);
//        paint.setColor(color);
//        canvas.drawCircle(r, r, r, paint);
//        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SRC_IN));
//        canvas.drawBitmap(bitmap, rect, rect, paint);
//        return output;
//    }

}
