import {
  color,
  hp,
  wp,
  width,
} from 'globalStyle';
import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
  container: {
    width: width,
    paddingVertical: hp(8),
    paddingHorizontal: wp(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  headerLeft: {
    flex: 3,
    justifyContent:'center',
  },
  optionBlockContainer: {
    // backgroundColor: 'red',
    flex: 3,
    alignItems: 'flex-end',
    justifyContent:'center'
  },
  centerBlock: {
    flex: 7,
    justifyContent:'center',
    // backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center'
  },
  headerTextContainer: {
    alignSelf: 'center',
    alignItems: 'center'
  },
  backBlock: {
    paddingHorizontal: wp(16),
    paddingBottom: hp(16),
    paddingTop: hp(5)
  },
  headeSubBlock: {
    alignItems: 'center',
  },
  headeSubBlock1: {
    paddingRight: wp(20),
  },
  subDetailText: {
    fontSize: wp(12),
    textAlign:'center',
    color: color.textDark,
    
    lineHeight: hp(18),
  },
  titleText: {
    fontSize: wp(14),
    textAlign:'center',
    color: '#000',
   
    lineHeight: hp(18),
  },
  backText: {
    fontSize: wp(14),
    color: '#000',
   
    lineHeight: hp(18),
  },
  optionText: {
    fontSize: wp(14),
    textAlign:'center',
    color: '#000',
   
    lineHeight: hp(18),
  },
  iconSize: wp(25),

});
