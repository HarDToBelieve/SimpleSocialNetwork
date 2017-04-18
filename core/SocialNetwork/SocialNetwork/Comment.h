//
//  Comment.h
//  SocialNetwork
//
//  Created by AnNguyen on 3/24/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Comment : JSONModel

//@property int cmtID;
@property NSString *content;
@property NSString *owner;
@property NSString *date;
//@property int postID;

@end
