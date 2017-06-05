package com.example.application.sociallogin;


import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.net.Uri;
import android.provider.MediaStore;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import net.gotev.uploadservice.MultipartUploadRequest;
import net.gotev.uploadservice.UploadNotificationConfig;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;

import java.util.Date;
import java.util.UUID;


public class AddActivity extends AppCompatActivity implements View.OnClickListener{
    EditText contentArea;
    ImageView imgButton;
    ImageView file;
    TextView post;
    TextView cancel;
    Date today = new Date();
    String date = today.toString();
    String content;
    private final int IMG_REQUEST = 1;
    private static final int STORAGE_PERMISSION_CODE = 123;
    private Bitmap bitmap;
    private Uri imgPath;
    String accessToken = Singleton.getInstance().getAccessToken();
    String userName = Singleton.getInstance().getUsername();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add);

        BottomNavigationView bottomNavigationView = (BottomNavigationView) findViewById(R.id.bottomNavView_Bar);
        BottomNavigationViewHelper.disableShiftMode(bottomNavigationView);

        Menu menu = bottomNavigationView.getMenu();
        MenuItem menuItem = menu.getItem(2);
        menuItem.setChecked(true);


        contentArea = (EditText) findViewById(R.id.content);
        imgButton = (ImageView) findViewById(R.id.imgButton);
        file = (ImageView) findViewById(R.id.file);
        post = (TextView) findViewById(R.id.postText);
        cancel = (TextView) findViewById(R.id.cancelText);


        cancel.setOnClickListener(this);
        imgButton.setOnClickListener(this);
        post.setOnClickListener(this);

        requestStoragePermission();

        Log.d("Info", content + userName + date);

        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch(item.getItemId()) {
                    case R.id.newfeed:
                        Intent intentNewfeed = new Intent(AddActivity.this, HomeActivity.class);
                        startActivity(intentNewfeed);
                        break;
                    case R.id.search:
                        Intent intentSearch = new Intent(AddActivity.this, SearchActivity.class);
                        startActivity(intentSearch);
                        break;
                    case R.id.add:
//                        Intent intentAdd = new Intent(AddActivity.this,AddActivity.class);
//                        startActivity(intentAdd);
                        break;
                    case R.id.chat:
                        Intent intentChat = new Intent(AddActivity.this, ChatActivity.class);
                        startActivity(intentChat);
                        break;
                    case R.id.profile:
                        Intent intentProfile = new Intent(AddActivity.this, ProfileActivity.class);
                        startActivity(intentProfile);
                        break;
                }
                return false;

            }
        });
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
                Bitmap scaleBitmap = Bitmap.createScaledBitmap(bitmap, 1080, 720, true);
                file.setImageBitmap(scaleBitmap);


            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    //method to get the file path from uri
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

    private void requestStoragePermission() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.READ_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED)
            return;

        if (ActivityCompat.shouldShowRequestPermissionRationale(this, Manifest.permission.READ_EXTERNAL_STORAGE)) {
            //If the user has denied the permission previously your code will come to this block
            //Here you can explain why you need this permission
            //Explain here why you need this permission
        }
        //And finally ask for the permission
        ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.READ_EXTERNAL_STORAGE}, STORAGE_PERMISSION_CODE);
    }


    //This method will be called when the user will tap on allow or deny
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {

        //Checking the request code of our request
        if (requestCode == STORAGE_PERMISSION_CODE) {

            //If permission is granted
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                //Displaying a toast
                Toast.makeText(this, "Permission granted now you can read the storage", Toast.LENGTH_LONG).show();
            } else {
                //Displaying another toast if permission is not granted
                Toast.makeText(this, "Oops you just denied the permission", Toast.LENGTH_LONG).show();
            }
        }
    }

    public void uploadMultipart() {
        content = contentArea.getText().toString();
        if(imgPath == null) {
                Ion.with(getApplicationContext())
                            .load("http://161.202.20.61:5000/post")
                            .setHeader("Authorization", "JWT " + accessToken)
                            .setBodyParameter("owner", userName)
                            .setBodyParameter("date", date)
                            .setBodyParameter("content", content)
                            .asString()
                            .setCallback(new FutureCallback<String>() {
                                @Override
                                public void onCompleted(Exception e, String result) {
                                    Intent profileIntent = new Intent(AddActivity.this, ProfileActivity.class);
                                    startActivity(profileIntent);
                                }
                            });
            Toast.makeText(this, "Post success", Toast.LENGTH_SHORT).show();
        } else {
            String path = getPath(imgPath);

            //Uploading code
            try {
                String uploadId = UUID.randomUUID().toString();

                //Creating a multi part request
                new MultipartUploadRequest(this, uploadId, Constant.UPLOAD_URL)
                        .setMethod("POST")
                        .addHeader("Authorization", "JWT " + accessToken)
                        .addFileToUpload(path, "file") //Adding file
                        .addParameter("owner", userName) //Adding text parameter to the request
                        .addParameter("date", date)
                        .addParameter("content", content)
                        .setNotificationConfig(new UploadNotificationConfig())
                        .setMaxRetries(2)
                        .startUpload(); //Starting the upload

                Toast.makeText(this, "Post success", Toast.LENGTH_SHORT).show();

                Intent profileIntent = new Intent(AddActivity.this, ProfileActivity.class);
                startActivity(profileIntent);

            } catch (Exception exc) {
                Toast.makeText(this, exc.getMessage(), Toast.LENGTH_SHORT).show();
            }
        }
    }

    @Override
    public void onClick(View v) {
        if( v == imgButton) {
            selectImage();
        }
        if ( v == post) {
            uploadMultipart();
        }
        if ( v == cancel) {
            Intent intentNewfeed = new Intent(AddActivity.this, HomeActivity.class);
            startActivity(intentNewfeed);
        }
    }

//    public void uploadMultipartWithoutImage


}
