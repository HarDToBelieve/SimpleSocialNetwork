//
//  InfoCollectionViewCell.h
//  SocialNetwork
//
//  Created by AnNguyen on 3/27/17.
//  Copyright © 2017 AnNguyen. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface InfoCollectionViewCell : UICollectionViewCell

@property (weak, nonatomic) IBOutlet UIImageView *profilePictureView;
@property (weak, nonatomic) IBOutlet UILabel *userNameLabel;
@property (weak, nonatomic) IBOutlet UIButton *followButton;
@property (weak, nonatomic) IBOutlet UILabel *birthdayLabel;
@property (weak, nonatomic) IBOutlet UIButton *changeAvatarButton;


@end
