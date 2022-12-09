import {StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import {font} from '../../../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    container: {
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: color.background,
      borderRadius: width(35),
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
      zIndex: 100,
      height:height(70)
    },
    bgImage: {
      width: width(100),
      height: height(100),
    },
    heading: {
      color: color.subHeadingColor1,
      fontFamily: font.one.Medium,
      fontSize: 23,
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
    bottomText:{
      color: color.primary,
      fontFamily: font.one.Medium,
      fontSize: 18,
      lineHeight: 25,
      textAlign:'center',
      fontWeight:'400',
      marginBottom:height(1)
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
      marginTop: height(1.5),
      borderRadius: totalSize(1),
    },
    titleStyle:{
      fontSize:18,
      fontWeight:'400',
      lineHeight:25,
      color:color.descriptionColor1
    }
  });
