package com.example.application.sociallogin;

/**
 * Created by HOANG-ANH on 5/30/2017.
 */

public class UserProfileData {
    private String username;
    private String content;
    private String likeNumber;
    private String imageUrl;
    private String postID;

    public UserProfileData (String username, String content, String likeNumber, String imageUrl, String postID) {
        this.username = username;
        this.content = content;
        this.likeNumber = likeNumber;
        this.imageUrl = imageUrl;
        this.postID = postID;
    }

    public String getPostID() {
        return postID;
    }

    public void setPostID(String postID) {
        this.postID = postID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getLikeNumber() {
        return likeNumber;
    }

    public void setLikeNumber(String likeNumber) {
        this.likeNumber = likeNumber;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
