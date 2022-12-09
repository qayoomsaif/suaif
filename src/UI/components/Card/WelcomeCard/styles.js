import {StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import {font} from '../../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    cardConatiner: {
      width: width(85),
      alignSelf: 'center',
      backgroundColor: color.background,
      marginTop: height(1),
      marginBottom: height(0.5),
      paddingVertical: height(1.9),
      borderRadius: totalSize(1),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      paddingHorizontal: width(6),
    },
    title: {
      color: color.textColor2,
      width: width(70),
      fontSize: 22,
      marginBottom: height(2),
      fontFamily: font.one.Medium,
    },
    description: {
      color: color.descriptionColor1,
      fontSize: 13.5,
      padding: 1.4,
      marginTop: -4,
      marginBottom: height(0),
      fontFamily: font.one.Normal,
      lineHeight: 16,
      
    },
    btnContainer: {
      marginTop: height(2.5),
      marginBottom: height(1.5),
      borderRadius: totalSize(0.8),
      width: '98%',
    },
    iconWrapper: {
      alignSelf: 'center',
    },
  });
