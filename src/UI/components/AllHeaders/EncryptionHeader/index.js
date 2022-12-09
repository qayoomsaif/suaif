import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {EncryptionIcon} from 'SVG';
import {useColors} from '../../../GlobalStyle/color';
const EncryptionHeader = ({}) => {
  const color = useColors();
  const refStyle = styles(color);
  return (
    <View style={refStyle.container}>
      <EncryptionIcon />
      <Text style={refStyle.text}>Encryption</Text>
    </View>
  );
};
export {EncryptionHeader};
