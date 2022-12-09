import {StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import {font} from '../../../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    container: {
      width: width(90),
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: height(2),
    },
    loginContainer: {
      width: width(90),
      backgroundColor: 'white',
      zIndex: 100,
      borderRadius: totalSize(1),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.46,
      shadowRadius: 11.14,
      elevation: 17,
      paddingHorizontal: width(4),
      paddingTop: height(3),
      zIndex: 1000,
      paddingBottom: height(8),
    },
    bgImage: {
      width: width(100),
      height: height(100),
    },
    heading: {
      color: color.subHeadingColor1,
      fontFamily: font.one.Medium,
      fontSize: 22,
      lineHeight: 23.91,
      marginLeft: width(1),
    },
    subHeading: {
      color: color.subHeadingColor1,
      fontFamily: font.one.Medium,
      fontSize: 15,
      lineHeight: 22,
      color: color.textColor2,
      marginLeft: width(1.3),
      fontWeight: '400',
      marginTop: height(2),
    },
    textInputContainer: {
      alignSelf: 'center',
      width: '100%',
      paddingHorizontal: width(2.5),
      height: height(5),
    },
    dropdown: {
      marginTop: height(1.4),
      width: '100%',
      paddingHorizontal: width(2.6),
      height: height(5),
    },
    button: {
      width: '100%',
      marginTop: height(8),
      borderRadius: totalSize(1),
    },
  });
