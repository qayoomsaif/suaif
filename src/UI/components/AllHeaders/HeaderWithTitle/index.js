import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useColors } from '../../../GlobalStyle/color';
import { Logo, Menu } from 'SVG';
export const HeaderWithTitle = ({ onPress, title, containerStyle = {}, textStyle = {} }) => {
  const colorList = useColors();
  const refStyle = styles(colorList);
  return (
    <View style={[refStyle.container, containerStyle,]} >
      <Logo height={30} width={30} />
      <Menu />
    </View>
  );
};
