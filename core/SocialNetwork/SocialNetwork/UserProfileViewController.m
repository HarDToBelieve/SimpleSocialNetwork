//
//  UserProfileViewController.m
//  SocialNetwork
//
//  Created by AnNguyen on 3/29/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import "UserProfileViewController.h"

@interface UserProfileViewController ()

@end

@implementation UserProfileViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    imageCache = [[NSCache alloc]init];
    
    currentUser = [User shareCurrentUser];
    currentPost = [Post shareInstance];
    inspectedUser = [[User alloc] init];
    
    inspectedUser.name = currentUser.otherUserName;
    
    _userNameLabel.text = inspectedUser.name;
    userPostArray = [[NSMutableArray alloc] init];
    
    [_profileCollectionView registerNib:[UINib nibWithNibName:@"PostCollectionViewCell" bundle:nil] forCellWithReuseIdentifier:@"PostCollectionViewCell"];
    [_profileCollectionView registerNib:[UINib nibWithNibName:@"InfoCollectionViewCell" bundle:nil] forCellWithReuseIdentifier:@"InfoCollectionViewCell"];
    
    [self getUserProfile];
    [self requestUserPost];
    
    [_profileCollectionView addPullToRefreshWithActionHandler:^{
        profilePostOffset = 0;
        [self requestUserPost];
    }];
    
    [_profileCollectionView addInfiniteScrollingWithActionHandler:^{
        [self requestUserPost];
    }];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)backButtonPressed:(UIButton *)sender {
    [self.navigationController popViewControllerAnimated:TRUE];
}

#pragma mark - UICollectionView

-(NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section{
    return userPostArray.count + 1;
}

- (CGSize)collectionView:(UICollectionView *)collectionView layout:(UICollectionViewLayout *)collectionViewLayout sizeForItemAtIndexPath:(NSIndexPath *)indexPath
{
    if (indexPath.row == 0) return CGSizeMake(SCREEN_WIDTH, 180);
    else {
        Post *post = [userPostArray objectAtIndex:indexPath.row - 1];
        if ([post.url  isEqual: @""]) {
            return CGSizeMake(SCREEN_WIDTH, 180);
        }
        else return CGSizeMake(SCREEN_WIDTH, 400);
    }
}

- (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath{
    if (indexPath.row == 0) {
        
        InfoCollectionViewCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:@"InfoCollectionViewCell" forIndexPath:indexPath];
        if (!cell) {
            cell = [[[NSBundle mainBundle] loadNibNamed:@"InfoCollectionViewCell" owner:nil options:nil] objectAtIndex:0];
        }
        cell.profilePictureView.image = inspectedUser.profilePicture;
        cell.profilePictureView.layer.masksToBounds = TRUE;
        cell.profilePictureView.layer.cornerRadius = cell.profilePictureView.frame.size.height / 2;
        
        cell.userNameLabel.text = inspectedUser.name;
        cell.birthdayLabel.text = inspectedUser.birthday;
        
        [cell.followButton addTarget:self action:@selector(followButtonPressed:) forControlEvents:UIControlEventTouchUpInside];
        
        return cell;
        
    } else {
        PostCollectionViewCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:@"PostCollectionViewCell" forIndexPath:indexPath];
        if (!cell) {
            cell = [[[NSBundle mainBundle] loadNibNamed:@"PostCollectionViewCell" owner:nil options:nil] objectAtIndex:0];
        }
        Post *post = [userPostArray objectAtIndex:indexPath.row - 1];
        [cell.userNameButton setTitle:post.owner forState:UIControlStateNormal];
        [cell.userNameButton setEnabled:FALSE];
        cell.postLabel.text = post.content;
        cell.commentButton.tag = post.postID;
        cell.likeButton.tag = post.postID;
        cell.likeLabel.text = [NSString stringWithFormat:@"%d likes", post.like];
        
        if ([post.url isEqualToString:@""]) {
            cell.imageView.image = nil;
        }
        else {
            NSString *imageName = imageName = post.url;
            UIImage *image = [imageCache objectForKey:imageName];
            
            if(image){
                cell.imageView.image = image;
            }
            
            else{
                cell.imageView.image = nil;
                
                dispatch_queue_t downloadQueue = dispatch_queue_create("image downloader", NULL);
                dispatch_async(downloadQueue, ^{
                    
                    UIImage *image = [UIImage imageWithData:[NSData dataWithContentsOfURL:[NSURL URLWithString:post.url]]];
                    
                    dispatch_async(dispatch_get_main_queue(), ^{
                        
                        cell.imageView.image = image;
                        
                    });
                    
                    [imageCache setObject:image forKey:imageName];
                });
            }
        }
        
        [cell.commentButton addTarget:self action:@selector(commentButtonPressed:) forControlEvents:UIControlEventTouchUpInside];
        [cell.likeButton addTarget:self action:@selector(likeButtonPressed:) forControlEvents:UIControlEventTouchUpInside];
        
        return cell;

    }
}

- (void) commentButtonPressed: (UIButton *)sender {
    currentPost.postID = sender.tag;
    CommentViewController *commentVC = [[CommentViewController alloc] initWithNibName:@"CommentViewController" bundle:nil];
    [self.navigationController pushViewController:commentVC animated:true];
}

- (void) likeButtonPressed: (UIButton *)sender {
    
    NSString *url = @"http://161.202.20.61:5000/likepost";
    NSDictionary *parameters = @{@"postID": @(sender.tag), @"action": @"like"};
    NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"POST" URLString:url parameters:parameters error:nil];
    [request setValue:[NSString stringWithFormat:@"JWT %@", currentUser.getToken] forHTTPHeaderField:@"Authorization"];
    
    AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
    [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
        
        if (!error) {
            NSLog(@"Success");
            [self requestUserPost];
        } else {
            NSLog(@"%@", response);
            NSLog(@"%d", currentPost.postID);
            NSLog(@"%d", sender.tag);
        }
    }] resume];
}

- (void) getUserProfile {
    NSString *url = [NSString stringWithFormat:@"http://161.202.20.61:5000/user?name=%@&action=getInfo", inspectedUser.name];
    
    NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"GET" URLString:url parameters:nil error:nil];
    
    NSLog(@"%@", currentUser.getToken);
    [request setValue:[NSString stringWithFormat:@"JWT %@", currentUser.getToken] forHTTPHeaderField:@"Authorization"];
    
    AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
    [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
        
        if (!error) {
    
            NSDictionary *jsonObject = (NSDictionary *)responseObject;
            inspectedUser.profilePicture = NULL;
            inspectedUser.name = [jsonObject objectForKey:@"name"];
            inspectedUser.birthday = [jsonObject objectForKey:@"birthday"];
            
            [_profileCollectionView reloadData];
        } else {
            NSLog(@"%@ %@", error, response);
        }
    }] resume ];
}

- (void) requestUserPost {
    NSString *url = [NSString stringWithFormat:@"http://161.202.20.61:5000/post?name=%@&postID=%d", currentUser.otherUserName, profilePostOffset];
    NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"GET" URLString:url parameters:nil error:nil];
    
    [request setValue:[NSString stringWithFormat:@"JWT %@", currentUser.getToken] forHTTPHeaderField:@"Authorization"];
    
    AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
    
    [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
        
        if (!error) {
            NSLog(@"%@", responseObject);
            NSLog(@"Success");
            NSDictionary *jsonObject = (NSDictionary *)responseObject;
            NSDictionary *arrTemp = [jsonObject objectForKey:@"posts"];
            
            if (profilePostOffset == 0) userPostArray = [[NSMutableArray alloc] init];
            profilePostOffset += 10;
            for (NSDictionary *row in arrTemp) {
                Post *post = [[Post alloc] initWithDictionary:row error:nil];
                [userPostArray addObject:post];
            }
            
            [_profileCollectionView reloadData];
            [_profileCollectionView.pullToRefreshView stopAnimating];
            [_profileCollectionView.infiniteScrollingView stopAnimating];
        } else {
            NSLog(@"Failed");
        }
    }] resume];
}


- (void) followButtonPressed: (UIButton *)sender {
    
    NSString *url = @"http://161.202.20.61:5000/flwuser";
    NSDictionary *parameters = @{@"following": inspectedUser.name};
    NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"POST" URLString:url parameters:parameters error:nil];
    [request setValue:[NSString stringWithFormat:@"JWT %@", currentUser.getToken] forHTTPHeaderField:@"Authorization"];
    
    AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
    [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
        
        if (!error) {
            NSLog(@"Success");
        } else {
            NSLog(@"Failed");
        }
    }] resume];
}


@end
