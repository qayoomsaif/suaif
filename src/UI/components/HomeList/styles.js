import { StyleSheet } from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
import { font } from '../../GlobalStyle/font';
export default styles =(color)=> StyleSheet.create({
  container: {
    backgroundColor: 'rgba(102, 195, 196, 0.5)',
    alignItems:'center',
    width: width(100),
    height: height(7),
    justifyContent:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:width(6),
    //opacity: 0.7,
    marginTop:6
  },
  title: {
      color: '#36474A',
      fontSize: 17,
      fontFamily:font.one.Normal,
      zIndex:1000
  }
});
