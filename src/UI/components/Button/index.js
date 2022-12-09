import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useColors} from '../../GlobalStyle/color';
export const Button = ({onPress, title,containerStyle={},textStyle={},bgColor='#374647'}) => {
  const colorList = useColors();
  const refStyle = styles(colorList);
  return (
    <TouchableOpacity style={[refStyle.container,containerStyle,{backgroundColor:bgColor}]} onPress={onPress}>
      <Text style={[refStyle.text,textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
