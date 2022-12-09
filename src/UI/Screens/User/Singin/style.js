import {StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import { font } from '../../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: color.background,
      marginTop: height(8),
    },
    loginContainer: {
      width: width(90),
      height: height(76),
      backgroundColor: 'white',
      position: 'absolute',
      top: -height(6),
      zIndex: 100,
      borderRadius: totalSize(2),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.46,
      shadowRadius: 11.14,
      elevation: 17,
      alignItems: 'center',
      paddingTop: height(4),
    },
    loginText: {
      marginTop: height(5.5),
      marginBottom:height(3.5),
      fontSize: 22,
      color: color.textColor4,
      fontFamily:font.one.Medium
    },
    continueBtn: {
      width: width(72),
      backgroundColor: '#787B7B',
      marginTop: height(5),
      borderRadius: totalSize(1),
    },
    logoBtnContainer: {
      width: width(72),
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingLeft: 0,
      borderRadius: totalSize(1),
      marginTop:height(2.5)
    },
    bottomTextContainer: {
      width: width(68),
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: height(6),
      alignItems: 'center',
    },
    dontText: {
      fontSize: 13,
      color:color.textColor2,
      fontFamily:font.one.Medium
    },
    signupBtn: {
      width: width(28.5),
      borderRadius: totalSize(1),
      height: height(4.5),
    },
    lowerTextContainer: {
      width: width(79),
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: height(3),
      alignItems: 'center',
      paddingHorizontal: width(12),
    },
    highlightText: {
      fontSize: 10.5,
      color: color.subHeadingColor1,
      fontFamily:font.one.Medium
    },
    bottomContainer: {
      width: width(79),
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: height(1),
      paddingHorizontal: width(18),
      alignItems:'center'
    },
    copyRightText: {
      width: width(85),
      fontSize: 11,
      color: 'white',
      textAlign: 'center',
      fontFamily:font.one.Light
    },
    termsConditionText: {
      fontSize: 14,
      color: color.background,
      alignSelf: 'flex-end',
      fontFamily:font.one.Medium
    },
    bgImage: {
      width: '100%',
      height: '100%',
    },
  });
