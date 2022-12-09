import {StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import { font } from '../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    container: {
      width: width(85),
      alignSelf: 'center',
      height: height(5.5),
      borderRadius: totalSize(1.5),
      alignItems: 'center',
      paddingLeft:width(5),
      backgroundColor: color.background,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
      marginTop:height(2.2),
      flexDirection:'row',
    },
    text: {
      color: color.textColor2,
      fontSize: 17,
      marginLeft:width(3.6),
      fontFamily:font.one.Medium,
      fontWeight: 'bold',
      lineHeight: 20
    },
  });
