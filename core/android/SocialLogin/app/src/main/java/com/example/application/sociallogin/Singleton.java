package com.example.application.sociallogin;

/**
 * Created by HOANG-ANH on 5/30/2017.
 */

public class Singleton {
    private static Singleton mInstance = null;

    private String accessToken;
    private String username;

    public Singleton() {
        accessToken ="";
        username = "";
    }

    public static Singleton getInstance(){
        if(mInstance == null)
        {
            mInstance = new Singleton();
        }
        return mInstance;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
