import { StyleSheet } from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
import { font } from '../../GlobalStyle/font';
export default styles =(color)=> StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor:color.background,
    flex:1
  },
  text:{
    color:color.green,
  },
  title: {
    color:"#000000",
    fontSize:17,
    fontFamily:font.one.Medium
  },
  subTitle: {
    color:"#277777",
    fontSize:17,
    fontFamily:font.one.Medium
  },
  description: {
    fontSize:13,
    color: '#545454',
    fontFamily:font.one.Medium,
    marginTop: 8,
    lineHeight: 16
  },
  titleContainer: {
    flexDirection:'row'
  },
  progressTile: {
    height: 22, 
    width: 48, 
    backgroundColor: '#277777', 
    borderRadius: 20, 
    alignItems:'center', 
    justifyContent:'center'
  },
  progressCounter:{
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily:font.one.Medium
  },
  progressInfo:{
    color:'#545454', 
    fontSize: 15, 
    fontFamily:font.one.Medium,
    paddingLeft:8
  },
  sectionModalFooter:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:20
  },
  btnText:{
    color:color.textColor1,
    fontSize:15,
    fontFamily:font.one.Medium
  },
  textStyle:{
    marginRight:width(3),
  },
  sectionModal: {
    backgroundColor:color.background,
    padding:20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    width: width(85),
    marginTop:12,
    borderRadius:10,
  }
});
