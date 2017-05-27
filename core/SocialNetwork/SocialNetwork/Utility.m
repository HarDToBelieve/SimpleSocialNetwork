//
//  Utility.m
//  AiLaTrieuPhu
//
//  Created by AnNguyen on 2/3/17.
//  Copyright © 2017 An. All rights reserved.
//

#import "Utility.h"
#import <CommonCrypto/CommonCryptor.h>
#import <CommonCrypto/CommonDigest.h>
#import <CommonCrypto/CommonHMAC.h>

@implementation Utility

static id<UtilityDelegate> ulDelegate;
+ (void) saveCustomObject:(id)_object AndKey:(NSString*)_key{
    NSUserDefaults *prefs = [NSUserDefaults standardUserDefaults];
    NSData *myEncodedObject = [NSKeyedArchiver archivedDataWithRootObject:_object];
    [prefs setObject:myEncodedObject forKey:_key];
}
+ (void) saveObject:(NSString*)_object AndKey:(NSString*)_key{
    if (_key != nil) {
        [[NSUserDefaults standardUserDefaults] setObject:_object forKey:_key];
        [[NSUserDefaults standardUserDefaults] synchronize];
    }
}
+ (id) loadCustomObject:(NSString*)_key{
    NSUserDefaults *prefs = [NSUserDefaults standardUserDefaults];
    NSData *myEncodedObject = [prefs objectForKey:_key];
    id customObj = [NSKeyedUnarchiver unarchiveObjectWithData: myEncodedObject];
    return customObj;
}
+ (void) removeObjectWithKey:(NSString*)_key{
    [[NSUserDefaults standardUserDefaults] removeObjectForKey:_key];
    [[NSUserDefaults standardUserDefaults] synchronize];
}
+ (NSString*) loadObject:(NSString*)_key{
    NSString *strObject = [[NSUserDefaults standardUserDefaults] stringForKey:_key];
    return strObject;
}

@end
