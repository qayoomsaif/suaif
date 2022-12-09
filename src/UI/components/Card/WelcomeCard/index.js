import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useColors} from '../../../GlobalStyle/color';
import {Button} from '../../Button';
import styles from './styles';

export const WelcomeCard = ({
  onPress,
  title,
  containerStyle = {},
  textStyle = {},
  btnTitle,
  heading,
  description,
  icon,
}) => {
  const colorList = useColors();
  colorList.background;
  const refStyle = styles(colorList);
  return (
    <View style={refStyle.cardConatiner}>
      <Text style={refStyle.title}>{heading}</Text>
      <Text style={refStyle.description}>{description}</Text>
      <View style={refStyle.iconWrapper}>{icon && icon}</View>

      <Button title={btnTitle} containerStyle={refStyle.btnContainer}  />
    </View>
  );
};
