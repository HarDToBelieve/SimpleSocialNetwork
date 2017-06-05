package com.example.application.sociallogin;

/**
 * Created by HOANG-ANH on 6/5/2017.
 */

public class CommentData {
    private String name;
    private String content;

    public CommentData(String name, String content) {
        this.name = name;
        this.content = content;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
