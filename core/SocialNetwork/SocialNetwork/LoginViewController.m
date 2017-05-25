//
//  LoginViewController.m
//  SocialNetwork
//
//  Created by AnNguyen on 3/20/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import "LoginViewController.h"

@interface LoginViewController ()

@end

@implementation LoginViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    currentUser = [User shareCurrentUser];
    
}

- (void) viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    _passwordTextField.text = @"";
    _usernameTextField.text = @"";
    [_passwordTextField resignFirstResponder];
}

#pragma mark - Action

- (IBAction)loginButtonPressed:(UIButton *)sender {
    [self handleLogIn];
}

- (IBAction)signUpButtonPressed:(UIButton *)sender {
    SignUpViewController *signUpVC = [[SignUpViewController alloc] initWithNibName:@"SignUpViewController" bundle:nil];
    [self.navigationController pushViewController:signUpVC animated:YES];
}

#pragma mark - NetworkCall

- (void) handleLogIn {
    if ([_passwordTextField.text  isEqual: @""] || [_usernameTextField  isEqual: @""]) {
        [self alertController:@"Something is missing!" message:@"Please enter your username and password"];
    } else {
        NSString *url = @"http://161.202.20.61:5000/auth";
        NSDictionary *parameters = @{@"username": _usernameTextField.text, @"password": _passwordTextField.text};
        NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"POST" URLString:url parameters:parameters error:nil];
        
        AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
        [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
            
            if (!error) {
                NSLog(@"%@", responseObject);
                NSDictionary *jsonObject = (NSDictionary *)responseObject;
                NSString *token = [jsonObject objectForKey:@"access_token"];
                NSLog(@"%@", token);
                [currentUser setToken:token];
                currentUser.name = _usernameTextField.text;
                HomeViewController *homeVC = [[HomeViewController alloc] initWithNibName:@"HomeViewController" bundle:nil];
                [self.navigationController pushViewController:homeVC animated:YES];
                
            } else {
                [self alertController:@"Something is wrong!" message:@"Please check your username and password"];
            }
        }] resume];
    }
}

#pragma mark - Helper Method

- (void) alertController: (NSString*) title message:(NSString*) message {
    UIAlertController *alertController = [UIAlertController alertControllerWithTitle:title message:message preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *action = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:nil];
    [alertController addAction:action];
    
    [self presentViewController:alertController animated:true completion:nil];
}

@end
