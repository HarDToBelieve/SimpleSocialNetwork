//
//  NewPostViewController.m
//  SocialNetwork
//
//  Created by AnNguyen on 3/23/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import "NewPostViewController.h"

@interface NewPostViewController ()

@end

@implementation NewPostViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    isFirstBeginEditting = true;
    currentUser = [User shareCurrentUser];

    _userNameLabel.text = currentUser.name;
    _profileImageView.layer.masksToBounds = TRUE;
    _profileImageView.layer.cornerRadius = _profileImageView.frame.size.height / 2;
    _profileImageView.image = currentUser.profilePicture;
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

- (void)textViewDidEndEditing:(UITextView *)textView {
    if ([textView.text isEqualToString:@""]) {
        textView.text = @"Add a comment...";
        textView.textColor = [UIColor lightGrayColor];
        isFirstBeginEditting = true;
    }
}

- (BOOL)textView:(UITextView *)textView shouldChangeTextInRange:(NSRange)range replacementText:(NSString *)text
{
    return textView.text.length + (text.length - range.length) <= 100;
}

#pragma mark - Action

- (IBAction)cancelButtonPressed:(UIButton *)sender {
    [self dismissViewControllerAnimated:TRUE completion:nil];
}

- (IBAction)postButtonPressed:(id)sender {
    [self postNewPost];
}

#pragma mark - NetworkCall

- (void) postNewPost {
    if ([_postTextView.text isEqualToString:@""] || isFirstBeginEditting == true) {
        [self alertController:@"You are so boring!" message:@"Please write something" handler:FALSE];
    } else {
        NSString *url = @"http://161.202.20.61:5000/post";
        
        NSDictionary *parameters = @{@"content": _postTextView.text, @"owner": currentUser.name, @"date": @"1-2-2012", @"like": @0};
        
        NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"POST" URLString:url parameters:parameters error:nil];
        [request setValue:[NSString stringWithFormat:@"JWT %@", currentUser.getToken] forHTTPHeaderField:@"Authorization"];
        
        AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
        [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
            
            if (!error) {
                [self alertController:@"Succeed!" message:nil handler:TRUE];
            } else {
                [self alertController:@"Something is wrong!" message:@"Please check your network connection" handler:FALSE];
            }
        }] resume ];
    }
}

#pragma mark - Helper Method

- (void) alertController: (NSString*) title message:(NSString*) message handler:(bool) handler {
    UIAlertController *alertController = [UIAlertController alertControllerWithTitle:title message:message preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *action;
    if (handler) {
        action = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            [self dismissViewControllerAnimated:TRUE completion:nil];
        }];
    } else {
        action = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:nil];
    }
    [alertController addAction:action];
    
    [self presentViewController:alertController animated:true completion:nil];
}

@end
