package com.example.application.sociallogin;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by HOANG-ANH on 6/5/2017.
 */

public class CommentDataAdapter extends RecyclerView.Adapter<CommentDataAdapter.ViewHolder> {
    ArrayList<CommentData> dataComment;
    Context context;


    public CommentDataAdapter(ArrayList<CommentData> dataComment, Context context) {
        this.dataComment = dataComment;
        this.context = context;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        LayoutInflater layoutInflater = LayoutInflater.from(parent.getContext());
        View itemView = layoutInflater.inflate(R.layout.activity_comment_item, parent, false);
        return new ViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        holder.txtName.setText(dataComment.get(position).getName());
        holder.txtComment.setText(dataComment.get(position).getContent());
    }

    @Override
    public int getItemCount() {
        return dataComment.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        TextView txtName;
        TextView txtComment;

        public ViewHolder(View itemView) {
            super(itemView);
            txtName = (TextView) itemView.findViewById(R.id.name);
            txtComment = (TextView) itemView.findViewById(R.id.content);
        }
    }
}
