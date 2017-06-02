//
//  HomeViewController.h
//  SocialNetwork
//
//  Created by AnNguyen on 3/23/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "PostCollectionViewCell.h"
#import "InfoCollectionViewCell.h"
#import "SearchTableViewCell.h"

#import "NewPostViewController.h"
#import "CommentViewController.h"
#import "UserProfileViewController.h"

#import "User.h"
#import "Post.h"
#import "Image.h"
#import "UIScrollView+SVPullToRefresh.h"
#import "UIScrollView+SVInfiniteScrolling.h"


@interface HomeViewController : UIViewController <UICollectionViewDelegate, UICollectionViewDataSource, UITableViewDelegate, UITableViewDataSource> {
    NSMutableArray *currentUserPostArray;
    NSMutableArray *newFeedArray;
    NSMutableArray *userListArray;
    NSMutableArray *newFeedImageArray;
    User *currentUser;
    Post *currentPost;
    int temp;
    int newFeedPostOffset;
    int profilePostOffset;
    NSCache *imageCache;
    UIImagePickerController *picker;
    UIImage *avatar;
}

@property (weak, nonatomic) IBOutlet UIImageView *homeImageView;
@property (weak, nonatomic) IBOutlet UIImageView *searchImageView;
@property (weak, nonatomic) IBOutlet UIImageView *chatImageView;
@property (weak, nonatomic) IBOutlet UIImageView *profileImageView;

@property (strong, nonatomic) IBOutlet UIView *homeView;
@property (strong, nonatomic) IBOutlet UIView *searchView;
@property (strong, nonatomic) IBOutlet UIView *chatView;
@property (strong, nonatomic) IBOutlet UIView *profileView;
@property (weak, nonatomic) IBOutlet UIView *contentView;

@property (weak, nonatomic) IBOutlet UICollectionView *profileCollectionView;
@property (weak, nonatomic) IBOutlet UITableView *searchTableView;
@property (weak, nonatomic) IBOutlet UICollectionView *homeCollectionView;




@end
