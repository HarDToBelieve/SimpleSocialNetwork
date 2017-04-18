//
//  CommentViewController.m
//  SocialNetwork
//
//  Created by AnNguyen on 3/23/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import "CommentViewController.h"

@interface CommentViewController ()

@end

@implementation CommentViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    currentUser = [User shareCurrentUser];
    currentPost = [Post shareInstance];
    isFirstBeginEditting = true;
    currentUserCommentArray = [[NSMutableArray alloc] init];
    [self getAllComments];
}

#pragma mark - UITextViewDelegate

- (BOOL)textViewShouldBeginEditing:(UITextView *)textView {
    if (isFirstBeginEditting) {
        textView.text = @"";
        textView.textColor = [UIColor blackColor];
        isFirstBeginEditting = false;
    }
    return YES;
}

- (BOOL)textView:(UITextView *)textView shouldChangeTextInRange:(NSRange)range replacementText:(NSString *)text
{
    return textView.text.length + (text.length - range.length) <= 80;
}

- (void)textViewDidEndEditing:(UITextView *)textView {
    if ([textView.text isEqualToString:@""]) {
        textView.text = @"Add a comment...";
        textView.textColor = [UIColor lightGrayColor];
        isFirstBeginEditting = true;
    }
}

#pragma mark - UITableView

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return currentUserCommentArray.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    CommentTableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"CommentTableViewCell"];
    if (!cell) {
        cell = [[[NSBundle mainBundle] loadNibNamed:@"CommentTableViewCell" owner:nil options:nil] objectAtIndex:0];
    }
    Comment *comment = [currentUserCommentArray objectAtIndex:indexPath.row];
    cell.nameLabel.text = comment.owner;
    cell.commentLabel.text = comment.content;

    return cell;
}

#pragma mark - NetworkCall

- (void) getAllComments {
    NSString *url = [NSString stringWithFormat:@"http://161.202.20.61:5000/post/cmt?postID=%d", currentPost.postID];
    
    NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"GET" URLString:url parameters:nil error:nil];
    [request setValue:[NSString stringWithFormat:@"JWT %@", currentUser.getToken] forHTTPHeaderField:@"Authorization"];
    
    AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
    [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
        
        if (!error) {
            NSLog(@"%@", responseObject);
            NSDictionary *jsonObject = (NSDictionary *)responseObject;
            NSDictionary *arrTemp = [jsonObject objectForKey:@"Comment"];
            
            currentUserCommentArray = [[NSMutableArray alloc] init];
            
            for (NSDictionary *row in arrTemp) {
                Comment *comment = [[Comment alloc] initWithDictionary:row error:nil];
                [currentUserCommentArray addObject:comment];
            }
            [_commentTableView reloadData];
            
        } else {
            [self alertController:@"Something is wrong!" message:@"Please check your network connection" handler:FALSE];
        }
    }] resume ];
}

- (void) postNewComment {
    NSString *url = @"http://161.202.20.61:5000/post/cmt";
    
    NSDictionary *parameters = @{@"content": _commentTextView.text, @"owner": currentUser.name, @"date": @"1-2-2012", @"postID": @(currentPost.postID)};
    
    NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"POST" URLString:url parameters:parameters error:nil];
    [request setValue:[NSString stringWithFormat:@"JWT %@", currentUser.getToken] forHTTPHeaderField:@"Authorization"];
    
    AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
    [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
        
        if (!error) {
            [self getAllComments];
        } else {
            [self alertController:@"Something is wrong!" message:@"Please check your network connection" handler:FALSE];
        }
    }] resume ];

}

#pragma mark - Action

- (IBAction)backButtonPressed:(UIButton *)sender {
    [self.navigationController popViewControllerAnimated:TRUE];
}

- (IBAction)postButtonPressed:(UIButton *)sender {
    [self postNewComment];
    _commentTextView.text = @"Add a comment...";
    _commentTextView.textColor = [UIColor lightGrayColor];
    isFirstBeginEditting = true;
    [_commentTextView resignFirstResponder];
}

#pragma mark - UIImagePickerDelegate

- (void) alertController: (NSString*) title message:(NSString*) message handler:(bool) handler {
    UIAlertController *alertController = [UIAlertController alertControllerWithTitle:title message:message preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *action;
    if (handler) {
        action = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            [self.navigationController popViewControllerAnimated:TRUE];
        }];
    } else {
        action = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:nil];
    }
    [alertController addAction:action];
    
    [self presentViewController:alertController animated:true completion:nil];
}


@end
