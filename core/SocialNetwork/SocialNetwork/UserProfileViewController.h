//
//  UserProfileViewController.h
//  SocialNetwork
//
//  Created by AnNguyen on 3/29/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "User.h"
#import "Post.h"
#import "InfoCollectionViewCell.h"
#import "PostCollectionViewCell.h"

#import "UIScrollView+SVPullToRefresh.h"
#import "UIScrollView+SVInfiniteScrolling.h"

@interface UserProfileViewController : UIViewController <UICollectionViewDelegate, UICollectionViewDataSource> {
    User *currentUser;
    User *inspectedUser;
    Post *currentPost;
    
    NSMutableArray *userPostArray;
    NSCache *imageCache;
    int profilePostOffset;
    BOOL isFollowed;
}

@property (weak, nonatomic) IBOutlet UILabel *userNameLabel;
@property (weak, nonatomic) IBOutlet UICollectionView *profileCollectionView;


@end
