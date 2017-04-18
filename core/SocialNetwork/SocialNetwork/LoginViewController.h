//
//  LoginViewController.h
//  SocialNetwork
//
//  Created by AnNguyen on 3/20/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "SignUpViewController.h"
#import "HomeViewController.h"
#import "User.h"


@interface LoginViewController : UIViewController {
    User *currentUser;
}

@property (weak, nonatomic) IBOutlet UITextField *usernameTextField;
@property (weak, nonatomic) IBOutlet UITextField *passwordTextField;


@end
