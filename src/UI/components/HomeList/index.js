import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useColors} from '../../GlobalStyle/color';
import {RightArrow} from 'SVG';
export const HomeList = ({title = '',onPress=()=>{}}) => {
  const colorList = useColors();
  const refStyle = styles(colorList);
  return (
    <TouchableOpacity style={refStyle.container} 
      onPress={onPress}
    >
      <Text style={refStyle.title}>{title}</Text>
      <RightArrow width={'14'} height={'22'} fill={"#36474A"} />
    </TouchableOpacity>
  );
};
