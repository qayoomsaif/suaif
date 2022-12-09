import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import { font } from '../../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    container: {
      height: height(5),
      alignItems: 'center',
      width: width(100),
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: color.subHeadingColor1,
    },
    text:{
      color:color.background,
      marginLeft:width(2),
      fontFamily:font.one.Medium,
      fontSize:12
    }
  });
