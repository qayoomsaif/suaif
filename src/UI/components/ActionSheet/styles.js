import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import {font} from '../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    modalContent: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      width: width(100),
      alignSelf: 'center',
      justifyContent: 'flex-end',
      zIndex: 1000,
    },
    actionSheetView: {
        alignItems: 'center',
        width: width(100),
        marginBottom: height(12),
        zIndex: 110,
    },
    text: {
      textAlign: 'center',
      fontFamily: font.one.Medium,
      fontSize: 14,
      lineHeight: 15,
      color:color.textColor2
    },
    textConatiner: {
      paddingVertical:height(1.5)
    },
  });
