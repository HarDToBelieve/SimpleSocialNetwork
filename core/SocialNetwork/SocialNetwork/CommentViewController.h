//
//  CommentViewController.h
//  SocialNetwork
//
//  Created by AnNguyen on 3/23/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "Post.h"
#import "User.h"
#import "CommentTableViewCell.h"
#import "Comment.h"

@interface CommentViewController : UIViewController <UITextViewDelegate, UITableViewDelegate, UITableViewDataSource> {
    Post *currentPost;
    User *currentUser;
    bool isFirstBeginEditting;
    NSMutableArray *currentUserCommentArray;
}

@property (weak, nonatomic) IBOutlet UITextView *commentTextView;
@property (weak, nonatomic) IBOutlet UITableView *commentTableView;


@end
