import { StyleSheet } from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
export default styles = (color) => StyleSheet.create({
  container: {
    width: width(90),
    alignSelf: 'center',
    borderRadius: totalSize(1.5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: color.textColor1,
    fontSize: width(4.5)
  }
});
