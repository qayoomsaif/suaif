import { StyleSheet } from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
import { font } from '../../../GlobalStyle/font';
export default styles =(color)=> StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor:color.background,
    flex:1
  },
  text:{
    color:color.green,
  },
  btnContainer: {
    position:'absolute',
     bottom:height(2.5),
     width:width(40),
     right:0,
     borderRadius:0,
     borderBottomLeftRadius:totalSize(3),
     borderTopLeftRadius:totalSize(3),
     height:height(6),
  },
  btnText:{
    color:color.textColor1,
    fontSize:15,
    fontFamily:font.one.Medium
  },
  textStyle:{
    marginRight:width(3),
  },
  tabsOptionsContainer:{
    // marginTop: 26
  }
});
