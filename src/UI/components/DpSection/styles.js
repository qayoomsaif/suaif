import {StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import {font} from '../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    container: {
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: color.background,
      borderRadius:80,
    },
    innerContainer: {
      position: 'absolute',
      bottom: -height(0.2),
      right: width(3.5),
      zIndex: 100,
      backgroundColor: color.background,

      borderRadius: width(5),
    },
    imageSource:{
      width:158,
      height:158,
      borderRadius:80,
    }
  });
