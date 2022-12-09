import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {Notification, BackArrow} from 'SVG';
import {useColors} from '../../../GlobalStyle/color';
import {width} from 'react-native-dimension';
import {UserIcon} from '../../../assets';
const Header = ({
  onPressLeft,
  onPressNotification,
  title,
  leftIconText = 'You',
  userIcon = true,
  textStyle = {},
  rightIcon = true,
  titleStyle = {},
  leftConatinerStyle = {},
  displayNotifciation = false,
  leftTextFontSize = 11,
}) => {
  const color = useColors();
  const refStyle = styles(color);
  return (
    <View style={refStyle.container}>
      <TouchableOpacity
        style={[refStyle.leftContainer, leftConatinerStyle]}
        onPress={onPressLeft}>
        {userIcon ? (
          <Image source={UserIcon} style={{width: 26, height: 26,borderRadius:14,marginRight:width(1.2)}} />
        ) : (
          <BackArrow />
        )}

        <Text
          style={[refStyle.userName, textStyle, {fontSize: leftTextFontSize}]}>
          {leftIconText}
        </Text>
        {!userIcon && <View style={{width: width(1.5)}} />}
      </TouchableOpacity>

      <Text style={[refStyle.title, titleStyle]}>{title?.toUpperCase()}</Text>
      <View style={[refStyle.rightContainer]}>
        {rightIcon && (
          <TouchableOpacity onPress={onPressNotification}>
            {displayNotifciation && <View style={refStyle.dotIcon} />}

            <Notification />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export {Header};
