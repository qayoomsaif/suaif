import {Platform, StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import {resize, color, hp, wp, wps} from 'globalStyle';
import {font} from '../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    containerStyle: {
      width: width(87),
      alignSelf: 'center',
      backgroundColor: color.background,
      alignItems: 'center',
      paddingVertical: height(3),
      borderRadius: totalSize(1),
      paddingHorizontal: width(6),
    },

    titile: {
      textAlign: 'center',
      fontSize: totalSize(3),
      color: color.headingColor1,
      marginVertical: height(2),
      fontFamily: font.one.Medium,
    },
    subTitile: {
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '500',
      fontStyle: 'normal',
      color: color.subHeadingColor1,
      fontFamily: font.one.Medium,
    },
    description: {
      fontSize: 18,
      color: color.descriptionColor1,
      marginTop: height(2),
      fontFamily: font.one.Medium,
      textAlign: 'center',
      fontWeight: '400',
      paddingTop: 2,
      lineHeight: 22,
    },
    descriptionContainer: {
      width: width(73),
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    textStyle: {
      fontSize: width(4.2),
    },
    crossIconContainer: {
      position: 'absolute',
      right: width(7),
      top: height(3),
    },

    ///Atchment container
    mainConatiner: {
      width: width(87),
      alignSelf: 'center',
      backgroundColor: color.background,
      alignItems: 'center',
      paddingTop: height(4),
      paddingBottom: height(3),
      borderRadius: totalSize(1),
      paddingHorizontal: width(6),
    },
    upperConatiner: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: height(1.5),
    },
    subTitileAttachment: {
      textAlign: 'center',
      fontSize: 19,
      lineHeight: 20,
      fontWeight: '500',
      fontStyle: 'normal',
      color: color.subHeadingColor1,
      fontFamily: font.one.Medium,
    },
    crossIconAttachment: {
      top: -height(0.8),
    },
    crossIconViewAttachment:{
      top: height(3),
      right: 20,
      position: 'absolute',
      zIndex:300
    },
    middleContainer: {
      borderBottomColor: color.borderColor2,
      borderBottomWidth: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: height(1.5),
    },
    imageText: {
      color: color.textColor2,
      fontFamily: font.one.Medium,
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: '400',
      height: 26,
      marginTop:Platform.OS=='ios'? height(1):-height(1),
      flex:1,
      justifyContent:'center'
    },
    iconContainer: {
      marginRight: width(3.5),
    },
    btnContainer: {
      marginTop: height(3.5),
      width: '100%',
    },

    //AttachementViewContainer
    mainBlackContainer:{
      position:'absolute',
      width: width(87),
      height: height(50),
      alignSelf: 'center',
      backgroundColor: '#000',
      //alignItems: 'center',
     zIndex: 200
      
      //paddingHorizontal: width(6),
    },
    secondBtn: {
      marginTop: height(3.5),
      width: '100%',
      backgroundColor:color.background,
      borderColor: color.subHeadingColor1,
      borderWidth: width(1),
    },
  });
