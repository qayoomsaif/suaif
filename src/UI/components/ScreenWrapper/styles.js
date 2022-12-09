import { StyleSheet } from 'react-native';
import { height } from 'react-native-dimension'
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainViewContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom:height(2)
    // paddingVertical: height(2)
  },
});
export default styles;
