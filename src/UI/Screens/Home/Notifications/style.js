import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import { font } from '../../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    notifyConatainer: {
      width: '100%',
      backgroundColor: '#E7E8F0',
      paddingHorizontal: width(7),
      paddingVertical: height(2.5),
    },
    text:
    {
      fontSize: 14,
      lineHeight: 19,
      fontFamily: font.one.Medium,
      fontWeight: '400',
      width: '85%',
      marginLeft:width(2)
    },
    line:{
      width: '100%',
      alignSelf: 'center',
      borderWidth: 0.5,
      borderColor: '#545454',
      marginVertical: height(3),
    }
  });
