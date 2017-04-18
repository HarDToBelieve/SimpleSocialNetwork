//
//  User.h
//  SocialNetwork
//
//  Created by AnNguyen on 3/20/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface User : NSObject

@property int *userId;
@property NSString *name;
@property NSString *password;
@property NSString *birthday;
@property NSString *image;
@property NSString *accessToken;
@property UIImage *profilePicture;
@property NSString *otherUserName;

+ (User *) shareCurrentUser;
- (void) setToken: (NSString *) token;
- (NSString *) getToken;

@end
