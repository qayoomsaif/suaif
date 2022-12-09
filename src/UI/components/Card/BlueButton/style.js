import {
  color,
  hp,
  wps,
} from 'globalStyle';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: wps(32),
    height: hp(56),
    marginVertical: hp(13),
    // borderRadius: hp(84),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: color.activeBtn
  },
  text: {
    textAlignVertical: 'center',
    color: color.textBlue,
   
    fontSize: hp(16, 0.5),
    letterSpacing: 0.05
  },
});
