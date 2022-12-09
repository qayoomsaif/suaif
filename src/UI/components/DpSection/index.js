import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useColors} from '../../GlobalStyle/color';
import {CameraIcon, ProfileIcon} from 'SVG';
export const DpSection = ({onPress, imageSource = '',marginTop=0,marginBottom=0}) => {
  const colorList = useColors();
  const refStyle = styles(colorList);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[refStyle.container,{marginTop:marginTop,marginBottom:marginBottom}]}>
          <View style={refStyle.innerContainer}>
            <CameraIcon />
          </View>
          {
            imageSource===''?
            <ProfileIcon />
            :
            <Image
             source={{uri:imageSource}}
             style={refStyle.imageSource}
            />
          }
        
    </TouchableOpacity>
  );
};
