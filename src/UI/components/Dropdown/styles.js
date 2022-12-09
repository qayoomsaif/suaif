import {StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import {font} from '../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    container: {
      height: height(5.3),
      borderWidth: 2,
      borderColor: color.borderColor,
      elevation: 6,
      borderRadius: 5,
      paddingHorizontal: width(2),
      width: width(80),
      justifyContent: 'center',
      paddingHorizontal: width(3.5),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
      backgroundColor: color.background,
    },
    selectedItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      alignContent: 'center',
    },
    selectedText: {
      color: '#000000',
      fontSize: width(4.2),
      fontFamily: font.one.Medium,
      fontWeight: '300',
    },
    expandedContainer: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      width: width(80),
      elevation: 6,
      position: 'absolute',
      zIndex: 100,
      //maxHeight: height(20)
    },
  });
