import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useColors} from '../../GlobalStyle/color';
export const ButtonWithLogo = ({
  onPress,
  title,
  containerStyle = {},
  textStyle = {},
  logo,
}) => {
  const colorList = useColors();
  const refStyle = styles(colorList);
  return (
    <TouchableOpacity
      style={[refStyle.container, containerStyle]}
      onPress={onPress}>
      {logo && logo}
      <Text style={[refStyle.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
