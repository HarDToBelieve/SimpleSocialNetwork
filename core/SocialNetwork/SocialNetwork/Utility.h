//
//  Utility.h
//  AiLaTrieuPhu
//
//  Created by AnNguyen on 2/3/17.
//  Copyright © 2017 An. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CommonCrypto/CommonCryptor.h>
#import <UIKit/UIKit.h>

@protocol UtilityDelegate <NSObject>
-(void) endSession;
@end

@interface Utility : NSObject
+ (void) saveCustomObject:(id)_object AndKey:(NSString*)_key;
+ (void) saveObject:(NSString*)_object AndKey:(NSString*)_key;
+ (id) loadCustomObject:(NSString*)_key;
+ (void) removeObjectWithKey:(NSString*)_key;
+ (NSString*) loadObject:(NSString*)_key;

@end
