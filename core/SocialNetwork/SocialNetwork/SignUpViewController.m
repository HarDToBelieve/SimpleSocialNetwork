//
//  SignUpViewController.m
//  SocialNetwork
//
//  Created by AnNguyen on 3/20/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import "SignUpViewController.h"

@interface SignUpViewController ()

@end

@implementation SignUpViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    

}

#pragma mark - Action

- (IBAction)backButtonPressed:(UIButton *)sender {
    [self.navigationController popViewControllerAnimated:TRUE];
}

- (IBAction)signUpButtonPressed:(UIButton *)sender {
    [self handleSignUp];
}

#pragma mark - NetworkCall

- (void) handleSignUp {
    
    if ([_passwordTextField.text  isEqual: @""] || [_userNameTextField  isEqual: @""] || [_dayTextField isEqual:@""] || [_monthTextField isEqual:@""] || [_yearTextField isEqual:@""]) {
        [self alertController:@"Something is missing!" message:@"Please fill all the detail given" handler:FALSE];
    } else {
        NSString *url = @"http://161.202.20.61:5000/reguser";
        NSString *birthday = [NSString stringWithFormat:@"%@-%@-%@", _dayTextField.text, _monthTextField.text, _yearTextField.text];
        
        NSDictionary *parameters = @{@"username": _userNameTextField.text, @"password": _passwordTextField.text, @"birthday": birthday};
    
        NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"POST" URLString:url parameters:parameters error:nil];
        
        AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
        [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
            
            if (!error) {
                [self alertController:@"Succeed!" message:@"Please login with your username and password" handler:TRUE];
            } else {
                [self alertController:@"Something is wrong!" message:@"Please check your username and password" handler:FALSE];
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
            [[self navigationController] popViewControllerAnimated:true];
        }];
    } else {
        action = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:nil];
    }
    [alertController addAction:action];
    
    [self presentViewController:alertController animated:true completion:nil];
}


@end
