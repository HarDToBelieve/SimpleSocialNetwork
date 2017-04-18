//
//  Post.m
//  SocialNetwork
//
//  Created by AnNguyen on 3/23/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import "Post.h"

@implementation Post

static Post *currentPost;

+ (Post *)shareInstance{
    if (currentPost == nil) {
        currentPost = [[Post alloc] init];
    }
    return currentPost;
}


@end
