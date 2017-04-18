//
//  Post.h
//  SocialNetwork
//
//  Created by AnNguyen on 3/23/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Post : JSONModel

@property NSString *content;
@property NSString *date;
@property int like;
@property NSString *owner;
@property int postID;

+ (Post *) shareInstance;

@end
