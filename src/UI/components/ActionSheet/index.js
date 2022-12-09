import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {useColors} from '../../GlobalStyle/color';
const PRIMARY_COLOR = 'rgb(0,98,255)';
import Modal from 'react-native-modal';
import {height, width} from 'react-native-dimension';
import style from './styles';
const WHITE = '#ffffff';
const BORDER_COLOR = '#DBDBDB';

export const ActionSheet = ({
  actionItems = [],
  onCancel = () => {},
  onPressCamera = () => {},
  onPressLibraray = () => {},
  actionTextColor = null,
  isVisible = false,
}) => {
  const colorList = useColors();
  const refStyle = style(colorList);
  return (
    <Modal
      visible={isVisible}
      style={refStyle.modalContent}
      onBackdropPress={onCancel}
      backdropColor={'black'}>
      <View
        style={refStyle.actionSheetView}>
        <View
          style={{
            width: width(90),
            backgroundColor: colorList.background,
            borderRadius: width(3),
          }}>
          <TouchableOpacity
            style={[
              refStyle.textConatiner,
              {borderBottomColor: colorList.borderColor1, borderWidth: 0.25},
            ]}
            onPress={onPressCamera}>
            <Text style={refStyle.text}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[refStyle.textConatiner]}
            onPress={onPressLibraray}>
            <Text style={refStyle.text}>Phone Library</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: width(90),
            backgroundColor: colorList.background,
            borderRadius: width(3),
            marginTop: height(1),
          }}>
          <TouchableOpacity style={[refStyle.textConatiner]} onPress={onCancel}>
            <Text style={refStyle.text}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
