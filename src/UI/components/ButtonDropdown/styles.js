import {StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import {font} from '../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    
    uploadButton: {
      width: 143,
      height: 43,
      backgroundColor: '#63cccd',
      borderRadius: 10,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:"row",
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    },
    uploadButtonText:{
      fontSize:18,
      fontFamily: font.one.Medium,
      lineHeight:18,
      color: '#FFFFFF',
      fontWeight: '500'
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
        height: 2,
      },
      shadowOpacity: 0.17,
      shadowRadius: 4.65,
      width: width(80),
      elevation: 5,
      position: 'absolute',
      zIndex: 90,
      //maxHeight: height(20)
    },
  });
