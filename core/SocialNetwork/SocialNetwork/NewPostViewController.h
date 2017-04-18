//
//  NewPostViewController.h
//  SocialNetwork
//
//  Created by AnNguyen on 3/23/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "User.h"
#import "Post.h"

@interface NewPostViewController : UIViewController <UITextViewDelegate> {
    bool isFirstBeginEditting;
    User *currentUser;
}

@property (weak, nonatomic) IBOutlet UITextView *postTextView;
@property (weak, nonatomic) IBOutlet UIImageView *profileImageView;
@property (weak, nonatomic) IBOutlet UILabel *userNameLabel;


@end
