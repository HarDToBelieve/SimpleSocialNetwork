package com.example.application.sociallogin;

import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

public class SearchActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_search);

        BottomNavigationView bottomNavigationView = (BottomNavigationView) findViewById(R.id.bottomNavView_Bar);
        BottomNavigationViewHelper.disableShiftMode(bottomNavigationView);

        Menu menu = bottomNavigationView.getMenu();
        MenuItem menuItem = menu.getItem(1);
        menuItem.setChecked(true);

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
}
