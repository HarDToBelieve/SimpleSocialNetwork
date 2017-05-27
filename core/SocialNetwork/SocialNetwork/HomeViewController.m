//
//  HomeViewController.m
//  SocialNetwork
//
//  Created by AnNguyen on 3/23/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import "HomeViewController.h"

#define NEWFEED 0
#define SEARCH 1
#define CHAT 2
#define PROFILE 3

@interface HomeViewController ()

@end

@implementation HomeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self configureView];
    
    currentUser = [User shareCurrentUser];
    currentPost = [Post shareInstance];
    
    
    newFeedArray = [[NSMutableArray alloc] init];
    
    newFeedImageArray = [[NSMutableArray alloc] init];
    imageCache = [[NSCache alloc]init];
    

    [self getNewFeed];
    [self requestSelfInfo];
    [self requestCurrentUserPost];
    
    [_homeCollectionView registerNib:[UINib nibWithNibName:@"PostCollectionViewCell" bundle:nil] forCellWithReuseIdentifier:@"PostCollectionViewCell"];
    [_profileCollectionView registerNib:[UINib nibWithNibName:@"PostCollectionViewCell" bundle:nil] forCellWithReuseIdentifier:@"PostCollectionViewCell"];
    [_profileCollectionView registerNib:[UINib nibWithNibName:@"InfoCollectionViewCell" bundle:nil] forCellWithReuseIdentifier:@"InfoCollectionViewCell"];
    
    [_homeCollectionView addPullToRefreshWithActionHandler:^{
        newFeedPostOffset = 0;
        [self getNewFeed];
    }];
    
    [_homeCollectionView addInfiniteScrollingWithActionHandler:^{
        [self getNewFeed];
    }];
    
    [_profileCollectionView addPullToRefreshWithActionHandler:^{
        profilePostOffset = 0;
        [self requestCurrentUserPost];
    }];
    
    [_profileCollectionView addInfiniteScrollingWithActionHandler:^{
        [self requestCurrentUserPost];
    }];
}

- (void) viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    newFeedPostOffset = 0;
    profilePostOffset = 0;
    [self getNewFeed];
    [_homeCollectionView setContentOffset:
     CGPointMake(0, -_homeCollectionView.contentInset.top) animated:YES];
    [self requestCurrentUserPost];
    [_profileCollectionView setContentOffset:
     CGPointMake(0, -_profileCollectionView.contentInset.top) animated:YES];
}


- (IBAction)tapOnNavigation:(UITapGestureRecognizer *)sender {
    [self resetNavigationButton];
    switch (sender.view.tag) {
        case NEWFEED:
            _homeImageView.image = [UIImage imageNamed:@"NewFeedSelected.png"];
            _homeView.hidden = false;
            _searchView.hidden = true;
            _chatView.hidden = true;
            _profileView.hidden = true;
            break;
        case SEARCH: // SEARCH
            [self requestUserList];
            _searchImageView.image = [UIImage imageNamed:@"SearchSelected.png"];
            _homeView.hidden = true;
            _searchView.hidden = false;
            _chatView.hidden = true;
            _profileView.hidden = true;
            break;
        case CHAT: // CHAT
            _chatImageView.image = [UIImage imageNamed:@"ChatSelected.png"];
            _homeView.hidden = true;
            _searchView.hidden = true;
            _chatView.hidden = false;
            _profileView.hidden = true;
            break;
        case PROFILE: // PROFILE
            _profileImageView.image = [UIImage imageNamed:@"ProfileSelected.png"];
            _homeView.hidden = true;
            _searchView.hidden = true;
            _chatView.hidden = true;
            _profileView.hidden = false;
            [_profileCollectionView reloadData];
            break;
    }
}

#pragma mark - UICollectionView

-(NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section{
    if (collectionView == _profileCollectionView) return currentUserPostArray.count + 1;
    else return newFeedArray.count;
}

- (CGSize)collectionView:(UICollectionView *)collectionView layout:(UICollectionViewLayout *)collectionViewLayout sizeForItemAtIndexPath:(NSIndexPath *)indexPath
{
    if (collectionView == _profileCollectionView) {
        if (indexPath.row == 0) return CGSizeMake(SCREEN_WIDTH, 180);
        else {
            Post *post = [currentUserPostArray objectAtIndex:indexPath.row - 1];
            if ([post.url  isEqual: @""]) {
                return CGSizeMake(SCREEN_WIDTH, 180);
            }
            else return CGSizeMake(SCREEN_WIDTH, 400);
        }
    }
    else {
        Post *post = [newFeedArray objectAtIndex:indexPath.row];
        if ([post.url  isEqual: @""]) {
            return CGSizeMake(SCREEN_WIDTH, 180);
        }
        else return CGSizeMake(SCREEN_WIDTH, 400);
    }
}

- (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath{
    if (collectionView == _profileCollectionView) {
        if (indexPath.row == 0) {
            InfoCollectionViewCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:@"InfoCollectionViewCell" forIndexPath:indexPath];
            if (!cell) {
                cell = [[[NSBundle mainBundle] loadNibNamed:@"InfoCollectionViewCell" owner:nil options:nil] objectAtIndex:0];
            }
            cell.profilePictureView.image = currentUser.profilePicture;
            cell.profilePictureView.layer.masksToBounds = TRUE;
            cell.profilePictureView.layer.cornerRadius = cell.profilePictureView.frame.size.height / 2;
            cell.profilePictureView.image = currentUser.profilePicture;
            
            cell.userNameLabel.text = currentUser.name;
            cell.birthdayLabel.text = currentUser.birthday;
               
            return cell;
            
        } else {
            PostCollectionViewCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:@"PostCollectionViewCell" forIndexPath:indexPath];
            if (!cell) {
                cell = [[[NSBundle mainBundle] loadNibNamed:@"PostCollectionViewCell" owner:nil options:nil] objectAtIndex:0];
            }
            Post *post = [currentUserPostArray objectAtIndex:indexPath.row - 1];
            [cell.userNameButton setTitle:post.owner forState:UIControlStateNormal];
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
            [cell.userNameButton addTarget:self action:@selector(userNameButtonPressed:) forControlEvents:UIControlEventTouchUpInside];
            
            return cell;
        }
    } else {
        PostCollectionViewCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:@"PostCollectionViewCell" forIndexPath:indexPath];
        if (!cell) {
            cell = [[[NSBundle mainBundle] loadNibNamed:@"PostCollectionViewCell" owner:nil options:nil] objectAtIndex:0];
        }
        
        Post *post = [newFeedArray objectAtIndex:indexPath.row];
        [cell.userNameButton setTitle:post.owner forState:UIControlStateNormal];
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
        [cell.userNameButton addTarget:self action:@selector(userNameButtonPressed:) forControlEvents:UIControlEventTouchUpInside];
        
        return cell;
    }
}

#pragma mark - UITableView
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return userListArray.count;
}


- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    SearchTableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"SearchTableViewCell"];
    if (!cell) {
        cell = [[[NSBundle mainBundle] loadNibNamed:@"SearchTableViewCell" owner:nil options:nil] objectAtIndex:0];
    }
    cell.userNameLabel.text = userListArray[indexPath.row];
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    NSString *userName = userListArray[indexPath.row];
    currentUser.otherUserName = userName;
    UserProfileViewController *userProfileVC = [[UserProfileViewController alloc] initWithNibName:@"UserProfileViewController" bundle:nil];
    [self.navigationController pushViewController:userProfileVC animated:TRUE];
}


- (void) userNameButtonPressed: (UIButton *)sender {
    currentUser.otherUserName = sender.titleLabel.text;
    UserProfileViewController *userProfileVC = [[UserProfileViewController alloc] initWithNibName:@"UserProfileViewController" bundle:nil];
    [self.navigationController pushViewController:userProfileVC animated:TRUE];
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
            [self getNewFeed];
        } else {
            NSLog(@"%@", response);
            NSLog(@"%d", currentPost.postID);
            NSLog(@"%d", sender.tag);
        }
    }] resume];
}



- (IBAction)addButtonPressed:(UITapGestureRecognizer *)sender {
    NewPostViewController *newPostVC = [[NewPostViewController alloc] initWithNibName:@"NewPostViewController" bundle:nil];
    [self presentViewController:newPostVC animated:TRUE completion:nil];
}



- (void) configureView {
    _homeView.frame = CGRectMake(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT - 41);
    _searchView.frame = CGRectMake(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT - 41);
    _chatView.frame = CGRectMake(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT - 41);
    _profileView.frame = CGRectMake(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT - 41);
    [_contentView addSubview:_homeView];
    [_contentView addSubview:_searchView];
    [_contentView addSubview:_chatView];
    [_contentView addSubview:_profileView];
    _homeView.hidden = false;
    _searchView.hidden = true;
    _chatView.hidden = true;
    _profileView.hidden = true;
}

- (void)resetNavigationButton {
    _homeImageView.image = [UIImage imageNamed:@"NewFeed.png"];
    _searchImageView.image = [UIImage imageNamed:@"Search.png"];
    _chatImageView.image = [UIImage imageNamed:@"Chat.png"];
    _profileImageView.image = [UIImage imageNamed:@"Profile.png"];
}


- (void) getNewFeed {
    
    NSString *url = [NSString stringWithFormat:@"http://161.202.20.61:5000/postnewfeed?name=%@&postID=%d", currentUser.name, newFeedPostOffset];
    
    NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"GET" URLString:url parameters:nil error:nil];
    
    NSLog(@"%@", currentUser.getToken);
    [request setValue:[NSString stringWithFormat:@"JWT %@", currentUser.getToken] forHTTPHeaderField:@"Authorization"];
    
    AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
    
    
    [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
        
        if (!error) {

            NSLog(@"%@", responseObject);
            
            NSDictionary *jsonObject = (NSDictionary *)responseObject;
            NSDictionary *arrTemp = [jsonObject objectForKey:@"posts"];
            
            if (newFeedPostOffset == 0) newFeedArray = [[NSMutableArray alloc] init];
            newFeedPostOffset += 10;
            for (NSDictionary *row in arrTemp) {
                Post *post = [[Post alloc] initWithDictionary:row error:nil];
                [newFeedArray addObject:post];
            }
            
            [_homeCollectionView reloadData];
            [_homeCollectionView.pullToRefreshView stopAnimating];
            [_homeCollectionView.infiniteScrollingView stopAnimating];
        } else {
            NSLog(@"%@ %@", error, response);
        }
    }] resume ];
}

- (void) requestSelfInfo {
    NSString *url = [NSString stringWithFormat:@"http://161.202.20.61:5000/user?name=%@&action=getInfo", currentUser.name];
    NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"GET" URLString:url parameters:nil error:nil];
    
    [request setValue:[NSString stringWithFormat:@"JWT %@", currentUser.getToken] forHTTPHeaderField:@"Authorization"];
    
    AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
    [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
        
        if (!error) {
            NSLog(@"%@", responseObject);
            
            NSDictionary *jsonObject = (NSDictionary *)responseObject;
            currentUser.profilePicture = NULL;
            currentUser.name = [jsonObject objectForKey:@"name"];
            currentUser.birthday = [jsonObject objectForKey:@"birthday"];
            
            [_profileCollectionView reloadData];
        } else {
            NSLog(@"Failed");
        }
    }] resume];
}

- (void) requestCurrentUserPost {
    NSString *url = [NSString stringWithFormat:@"http://161.202.20.61:5000/post?name=%@&postID=%d", currentUser.name, profilePostOffset];
    NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"GET" URLString:url parameters:nil error:nil];

    [request setValue:[NSString stringWithFormat:@"JWT %@", currentUser.getToken] forHTTPHeaderField:@"Authorization"];
    
    AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
    
    [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
        
        if (!error) {
            NSLog(@"%@", responseObject);
            NSLog(@"Success");
            NSDictionary *jsonObject = (NSDictionary *)responseObject;
            NSDictionary *arrTemp = [jsonObject objectForKey:@"posts"];
            
            if (profilePostOffset == 0) currentUserPostArray = [[NSMutableArray alloc] init];
            profilePostOffset += 10;
            for (NSDictionary *row in arrTemp) {
                Post *post = [[Post alloc] initWithDictionary:row error:nil];
                [currentUserPostArray addObject:post];
            }

            [_profileCollectionView reloadData];
            [_profileCollectionView.pullToRefreshView stopAnimating];
            [_profileCollectionView.infiniteScrollingView stopAnimating];
        } else {
            NSLog(@"Failed");
        }
    }] resume];
}

- (void) requestUserList {
    NSString *url = @"http://161.202.20.61:5000/user?action=getListUser";
    NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"GET" URLString:url parameters:nil error:nil];
    [request setValue:[NSString stringWithFormat:@"JWT %@", currentUser.getToken] forHTTPHeaderField:@"Authorization"];
    
    AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
    [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
        
        if (!error) {
            NSLog(@"%@", responseObject);
            NSDictionary *jsonObject = (NSDictionary *)responseObject;
            
            userListArray = [[NSMutableArray alloc] init];
            NSDictionary *userTemp;
            temp = 1;
            
            do {
                NSString *index = [NSString stringWithFormat:@"%d", temp];
                userTemp = [jsonObject objectForKey:index];
                if (userTemp == nil) break;
                [userListArray addObject:userTemp];
                temp++;
            } while (userTemp != nil);
            [_searchTableView reloadData];
            
        } else {
            NSLog(@"Failed");
        }
    }] resume];
}


- (IBAction)logOutButtonPressed:(UIButton *)sender {
    [self alertLogoutController:@"Do you want to sign out?" message:nil];
}

- (void) alertLogoutController: (NSString*) title message:(NSString*) message {
    UIAlertController *alertController = [UIAlertController alertControllerWithTitle:title message:message preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *action = [UIAlertAction actionWithTitle:@"Yes" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        [[self navigationController] popViewControllerAnimated:true];
    }];;
    UIAlertAction *actionTwo = [UIAlertAction actionWithTitle:@"No" style:UIAlertActionStyleDefault handler:nil];
    [alertController addAction:action];
    [alertController addAction:actionTwo];
    
    [self presentViewController:alertController animated:true completion:nil];
}


@end
