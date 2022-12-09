import {StyleSheet,Platform} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import { font } from '../../UI/GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    container: {
      backgroundColor: color.primaryColor,
      height:Platform.OS==='ios' ? height(12.75):height(10),
      justifyContent:'space-evenly'
      
    },
    tabIconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        marginTop:height(0.7),
        fontSize: width(3),
        color: color.textColor1,
        fontFamily:font.one.Medium,
        width: '100%'
    }
  });
