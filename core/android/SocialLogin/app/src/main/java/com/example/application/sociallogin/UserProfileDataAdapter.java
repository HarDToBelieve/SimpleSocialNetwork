package com.example.application.sociallogin;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.android.volley.Response;
import com.squareup.picasso.Picasso;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by HOANG-ANH on 5/30/2017.
 */

public class UserProfileDataAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {
    List<UserProfileData> newfeedData;
    Context context;
    private Activity activity;
    private boolean isLoading;
    private final int VIEW_TYPE_ITEM = 0;
    private final int VIEW_TYPE_LOADING = 1;
    private HomeOnLoadMoreListener onLoadMoreListener;
    private int totalItemCount;
    private int visibleThreshold = 10;
    private int lastVisibleItem, getTotalItemCount;



    public UserProfileDataAdapter(RecyclerView recyclerView, List<UserProfileData> newfeedData, Context context) {
        this.newfeedData = newfeedData;
        this.context = context;

        final LinearLayoutManager linearLayoutManager = (LinearLayoutManager) recyclerView.getLayoutManager();
        recyclerView.addOnScrollListener(new RecyclerView.OnScrollListener() {
            @Override
            public void onScrolled(RecyclerView recyclerView, int dx, int dy) {
                super.onScrolled(recyclerView, dx, dy);
                totalItemCount = linearLayoutManager.getItemCount();
                lastVisibleItem = linearLayoutManager.findLastVisibleItemPosition();
                if (!isLoading && totalItemCount <= (lastVisibleItem + visibleThreshold)) {
                    if (onLoadMoreListener != null) {
                        onLoadMoreListener.onLoadMore();
                    }
                    isLoading = true;
                }
            }
        });
    }

    public void setOnLoadMoreListener(HomeOnLoadMoreListener mOnLoadMoreListener) {
        this.onLoadMoreListener = mOnLoadMoreListener;
    }

    @Override
    public int getItemViewType(int position) {
        return newfeedData.get(position) == null ? VIEW_TYPE_LOADING : VIEW_TYPE_ITEM;
    }

    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        if(viewType == VIEW_TYPE_ITEM) {
            LayoutInflater layoutInflater = LayoutInflater.from(parent.getContext());
            View itemView = layoutInflater.inflate(R.layout.activity_userprofile_item, parent, false);
            return new StatusViewHolder(itemView);
        } else {
            View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.activity_userprofile_loading, parent, false);
            return new LoadingViewHolder(view);
        }
    }

    @Override
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int position) {

        if (holder instanceof StatusViewHolder) {
            final UserProfileData listItem = newfeedData.get(position);
            StatusViewHolder statusViewHolder = (StatusViewHolder) holder;
            statusViewHolder.username.setText(listItem.getUsername());
            statusViewHolder.content.setText(listItem.getContent());
            statusViewHolder.likeNumber.setText(listItem.getLikeNumber());
            if (listItem.getImageUrl().equals("")) {
                statusViewHolder.image.setImageResource(0);
            } else {
                Picasso.with(context)
                        .load(listItem.getImageUrl())
                        .resize(1080, 720)
                        .into(statusViewHolder.image);
            }

            statusViewHolder.comment.setOnClickListener(
                    new View.OnClickListener() {
                        @Override
                        public void onClick(View view) {
                            Intent commentIntent = new Intent(context, CommentActivity.class);
                            commentIntent.putExtra("postID", listItem.getPostID());
                            context.startActivity(commentIntent);
                        }
                    }
            );

        } else if(holder instanceof LoadingViewHolder) {
            LoadingViewHolder loadingViewHolder = (LoadingViewHolder) holder;
            loadingViewHolder.progressBar.setIndeterminate(true);
        }
    }


    @Override
    public int getItemCount() {

        return newfeedData == null ? 0 : newfeedData.size();
    }

    public class StatusViewHolder extends RecyclerView.ViewHolder {
        TextView username;
        TextView content;
        ImageView image;
        TextView likeNumber;
        TextView like;
        TextView comment;
        public StatusViewHolder(View itemView) {
            super(itemView);
            username = (TextView) itemView.findViewById(R.id.username);
            content = (TextView) itemView.findViewById(R.id.content);
            image = (ImageView) itemView.findViewById(R.id.image);
            likeNumber = (TextView) itemView.findViewById(R.id.likeNumber);
            like = (TextView) itemView.findViewById(R.id.like);
            comment = (TextView) itemView.findViewById(R.id.comment);
        }
    }

    private class LoadingViewHolder extends RecyclerView.ViewHolder {
        public ProgressBar progressBar;

        public LoadingViewHolder(View view) {
            super(view);
            progressBar = (ProgressBar) view.findViewById(R.id.progressBar1);
        }
    }

    public void setLoaded() {
        isLoading = false;
    }

}
