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
      fontFamily:font.one.Medium,
      zIndex:1000
  },
  expandedHeading:{
    fontSize:15,
    lineHeight:22,
    fontFamily:font.one.Medium,
    color: '#000',
    marginLeft: 12
  },
  lineSeprator:{
    width: width(95),
    height: 1,
    backgroundColor: color.descriptionColor1,
    alignSelf:'center'
  }
});
