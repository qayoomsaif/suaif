import { StyleSheet } from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
import { font } from '../../GlobalStyle/font';
export default styles =(color)=> StyleSheet.create({
  container: {
    width:width(74),
    alignSelf:'center',
    height:height(5.5),
    borderRadius:totalSize(1),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:color.buttonColor1
  },
  text:{
    color:color.textColor1,
    fontSize:width(4.8),
    fontFamily:font.one.Medium
  }
});
  