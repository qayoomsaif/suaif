import {StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import { font } from '../../../GlobalStyle/font';
import { sizes } from '../../../GlobalStyle/sizes';

export default styles = color =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: color.background,
      justifyContent: 'space-between',
    },
    textStyle: {
      fontSize: 14,
      marginLeft: width(2),
      textTransform: 'uppercase',
    },
    bgImage: {
      width: width(100),
      height: height(56),
      alignItems: 'center',
    },
    logoContainer: {
      marginTop: height(4.8),
    },
    h1: {
      textAlign: 'center',
      color: color.textColor1,
      fontSize: width(8.8),
      marginTop: height(2),
      fontFamily:font.one.Medium
    },
    loginBtn: {
      width: width(85),
      alignSelf: 'center',
    },
    createaccountBtn: {
      width: width(85),
      alignSelf: 'center',
      marginTop: height(2.2),
      backgroundColor: color.background,
      borderColor: color.primary,
      borderWidth: 3,
    },
    createBtnText: {
      color: color.primaryColor,
      fontSize: 17,
    },
    continueGuest: {
      color: color.subHeadingColor1,
      textAlign: 'center',
      fontSize: 15,
      marginRight: width(2),
      fontFamily:font.one.Bold
    },
    guesContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: height(2.2),
    },
    bySigininText: {
      textAlign: 'center',
      fontSize: 14,
      marginTop: height(4),
      color: color.texttColor3,
      fontFamily:font.one.Medium
    },
    lowerTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    higlightText: {
      textAlign: 'center',
      fontSize: 14,
      marginTop: height(0.5),
      color: color.subHeadingColor1,
      textDecorationLine: 'underline',
      fontFamily:font.one.Bold
    },
    middileConatiner: {
      width: width(93),
      position: 'absolute',
      bottom: height(11),
      paddingVertical: height(4.5),
      alignSelf: 'center',
      backgroundColor: color.background1,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    bottomContainer: {
      marginBottom: height(4),
    },
    leftHeader:{
      width:width(42),
    }
  });
