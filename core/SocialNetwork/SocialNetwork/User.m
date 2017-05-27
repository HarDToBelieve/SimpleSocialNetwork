//
//  User.m
//  SocialNetwork
//
//  Created by AnNguyen on 3/20/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import "User.h"

@implementation User

static User *currentUser;

+ (User *) shareCurrentUser{
    if (currentUser == nil) {
        currentUser = [[User alloc] init];
    }
    return currentUser;
}

- (void) setToken: (NSString *) token {
    _accessToken = token;
}

- (NSString *) getToken {
    return _accessToken;
}


@end
