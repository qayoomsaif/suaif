import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {font} from '../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    container: {
      width: width(80),
      borderColor: color.borderColor,
      borderWidth: 2,
      height: height(5.3),
      paddingHorizontal: width(4),
      borderRadius: width(1),
      marginTop: height(1.5),
      backgroundColor: color.background,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
      fontSize: width(4.2),
      fontFamily: font.one.Medium,
      fontWeight: '300',
      color:color.textColor2
    },
  });
