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
    picker = [[UIImagePickerController alloc] init];
    picker.delegate = self;
    picker.allowsEditing = YES;
    picker.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
    
    if (IS_IPHONE_5) _profileImageViewHeight.constant = 100;
    else if (IS_IPHONE_6) _profileImageViewHeight.constant = 140;
    else _profileImageViewHeight.constant = 180;
}

#pragma mark - Action

- (IBAction)backButtonPressed:(UIButton *)sender {
    [self.navigationController popViewControllerAnimated:TRUE];
}

- (IBAction)signUpButtonPressed:(UIButton *)sender {
    [self handleSignUp];
}

- (IBAction)chooseProfilePicture:(UIButton *)sender {
    [self presentViewController:picker animated:YES completion:nil];
}

#pragma mark - NetworkCall

- (void) handleSignUp {
    
    if ([_passwordTextField.text  isEqual: @""] || [_userNameTextField  isEqual: @""] || [_dayTextField isEqual:@""] || [_monthTextField isEqual:@""] || [_yearTextField isEqual:@""] || _profileImage.tag == 0) {
        [self alertController:@"Something is missing!" message:@"Please fill all the detail given" handler:FALSE];
    } else {
        NSString *url = @"http://161.202.20.61:5000/user/reg";
        NSString *birthday = [NSString stringWithFormat:@"%@-%@-%@", _dayTextField.text, _monthTextField.text, _yearTextField.text];
        NSString *imageString = [self encodeToBase64String:_profileImage.image];
        
        NSDictionary *parameters = @{@"userName": _userNameTextField.text, @"password": _passwordTextField.text, @"birthday": birthday, @"image": imageString};
    
        NSMutableURLRequest *request = [[AFJSONRequestSerializer serializer] requestWithMethod:@"POST" URLString:url parameters:parameters error:nil];
        
        AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
        [[manager dataTaskWithRequest:request completionHandler:^(NSURLResponse * _Nonnull response, id  _Nullable responseObject, NSError * _Nullable error) {
            
            if (!error) {
                [self alertController:@"Succeed!" message:@"Please login with your username and password" handler:TRUE];
            } else {
                [self alertController:@"Something is wrong!" message:@"Please check your username and password" handler:FALSE];
                NSLog(@"%@", imageString);
            }
        }] resume ];
    }

}

#pragma mark - UIImagePickerDelegate

- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary *)info {
    
    UIImage *chosenImage = info[UIImagePickerControllerEditedImage];
    _profileImage.image = chosenImage;
    _profileImage.layer.cornerRadius = _profileImageViewHeight.constant / 2;
    _profileImage.tag = 1;
    [picker dismissViewControllerAnimated:YES completion:nil];
    
}

#pragma mark - Helper Method

- (NSString *)encodeToBase64String:(UIImage *)image {
    return [UIImagePNGRepresentation(image) base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
}

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
