import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import { font } from '../../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    container: {
      height: height(5.3),
      alignItems: 'center',
      width: width(100),
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: color.primary,
    },
    leftContainer: {
      width:width(21.5),
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'flex-end'
    },
    userName: {
      color:color.background,
      fontSize:11,
      fontFamily:font.one.Medium
    },
    title:{
      color:color.background,
      fontSize:14,
      flex:1,
      textAlign:'center',
      fontFamily:font.one.Medium,
      fontWeight:'bold',
      lineHeight:25
    },
    rightContainer:{
      width:width(21.5),
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center',
    },
    dotIcon:{
      width:width(3),
      height:width(3),
      backgroundColor:color.red,
      borderRadius:width(2),
      position:'absolute',
      top:height(0.2),
      right:-width(0.5),
      zIndex:1000
    }
  });
