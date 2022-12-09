import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';
import {useColors} from '../../GlobalStyle/color';
import Modal from 'react-native-modal';
import {Button} from '../Button';
import {height, width} from 'react-native-dimension';
import {font} from '../../GlobalStyle/font';
import {CrossIcon, DeleteIcon, ViewIcon, EditIcon, XIcon} from 'SVG';
export const WlecomeModal = ({
  onPress,
  title = '',
  isVisible,
  icon,
  subTitile = '',
  description = '',
  btnTitle = '',
  onCancel = () => {},
  displayBold = false,
  boldText = '',
  secondBoldText = '',
  textBeforeBolde = '',
  textAfterBold = '',
  midlleText = '',
  titleStyle = {},
  marginTopBtn = height(2.5),
  descriptionMarginTop = height(2),
  subDesripMarginTop = height(0.8),
  containerStyle = {},
  subTitileStyle = {},
  descriptionStyle = {},
  displayCross = false,
  subDiscription = '',
  isSecondButton = false,
  marginTopSecondBtn = height(2),
  secondBtnTitle = '',
  noOfBoldText = 1,
  onPressCancel = () => {},
  paddingHorizontal=width(6),
  firsBtnWidth= width(74),
}) => {
  const colorList = useColors();
  const refStyle = styles(colorList);
  const B = props => (
    <Text style={{fontFamily: font.one.Medium, fontWeight: 'bold'}}>
      {props.children}
    </Text>
  );
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onCancel}
      animationInTiming={1000}>
      <View style={[refStyle.containerStyle, containerStyle,{paddingHorizontal:paddingHorizontal}]}>
        {displayCross && (
          <TouchableOpacity
            style={refStyle.crossIconContainer}
            activeOpacity={1}
            onPress={onCancel}>
            <CrossIcon />
          </TouchableOpacity>
        )}
        {icon && icon}
        <Text style={[refStyle.titile, titleStyle]}>{title}</Text>
        {subTitile != '' && (
          <Text style={[refStyle.subTitile, subTitileStyle]}>{subTitile}</Text>
        )}
        {displayBold && noOfBoldText === 1 ? (
          <Text style={[refStyle.description,descriptionStyle,{marginTop: descriptionMarginTop, lineHeight: 22}]}>
            {textBeforeBolde}
            <B>{boldText}</B>
            {textAfterBold}
          </Text>
        ) : displayBold && noOfBoldText === 2 ? (
          <Text style={[refStyle.description,descriptionStyle,{marginTop: descriptionMarginTop, lineHeight: 22}]}>
            {textBeforeBolde}
            <B>{boldText}</B>
            {midlleText}
            <B>{secondBoldText}</B>
            {textAfterBold}
          </Text>
        ) : description != '' ? (
          <Text
            style={[
              refStyle.description,
              descriptionStyle,
              {marginTop: descriptionMarginTop, lineHeight: 22},
            ]}>
            {description}
          </Text>
        ) : (
          <></>
        )}
        {subDiscription != '' && (
          <Text
            style={[
              refStyle.description,
              descriptionStyle,
              {marginTop: subDesripMarginTop, lineHeight: 22},
            ]}>
            {subDiscription}
          </Text>
        )}
        <Button
          title={btnTitle}
          onPress={onPress}
          textStyle={refStyle.textStyle}
          containerStyle={{marginTop: marginTopBtn,width: firsBtnWidth}}
        />
        {isSecondButton && (
          <Button
            containerStyle={[
              refStyle.secondBtn,
              {marginTop: marginTopSecondBtn},
            ]}
            bgColor={colorList.background}
            title={secondBtnTitle}
            textStyle={{color: colorList.subHeadingColor1, fontWeight: 'bold'}}
            onPress={onPressCancel}
          />
        )}
      </View>
    </Modal>
  );
};
export const AttAchmentModal = ({
  isVisible,
  btnTitle = '',
  onCancel = () => {},
  containerStyle = {},
  attachments = [],
  removeAttachment = () => {},
  editAttachment = () => {},
  editedAttachment = null,
  ViewAttachment = () => {},
}) => {
  const colorList = useColors();
  const refStyle = styles(colorList);
  const [title, setTitle] = useState('');

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onCancel}
      animationInTiming={1000}
      animationOutTiming={1000}>
      <View style={[refStyle.mainConatiner, containerStyle]}>
        <View style={refStyle.upperConatiner}>
          <Text style={refStyle.subTitileAttachment}>My Attachments</Text>
          <TouchableOpacity
            style={refStyle.crossIconAttachment}
            activeOpacity={1}
            onPress={onCancel}>
            <CrossIcon />
          </TouchableOpacity>
        </View>
        {attachments?.map((item, index) => {
          return (
            <View
              style={[
                refStyle.middleContainer,
                index === attachments.length - 1 && {
                  borderBottomColor: 'transparent',
                },
              ]}
              key={String(index)}>
              <TouchableOpacity onPress={() => ViewAttachment(index)}>
                <View style={refStyle.iconContainer}>
                  <ViewIcon />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeAttachment(index)}>
                <View style={refStyle.iconContainer}>
                  <DeleteIcon />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => editAttachment(true, index, item?.fileName)}>
                <View style={refStyle.iconContainer}>
                  <EditIcon />
                </View>
              </TouchableOpacity>
              <TextInput
                editable={index == editedAttachment}
                value={item?.fileName}
                style={refStyle.imageText}
                numberOfLines={1}
                onSubmitEditing={() =>
                  editAttachment(false, index, item?.fileName)
                }
                onChangeText={text => {
                  editAttachment(true, index, text);
                }}
              />
            </View>
          );
        })}

        <Button
          title={btnTitle}
          onPress={onCancel}
          containerStyle={refStyle.btnContainer}
          bgColor={colorList.subHeadingColor1}
        />
      </View>
    </Modal>
  );
};

export const ViewImagesModal = ({
  isImageModalVisible,
  onXCancel,
  containerStyle = {},
  attachment = '',
}) => {
  const colorList = useColors();
  const refStyle = styles(colorList);
  return (
    <Modal
      isVisible={isImageModalVisible}
      animationInTiming={1000}
      animationOutTiming={1000}>
      <View style={[refStyle.mainBlackContainer]}>
        <TouchableOpacity
          style={refStyle.crossIconViewAttachment}
          activeOpacity={1}
          onPress={onXCancel}>
          <XIcon />
        </TouchableOpacity>
        <View style={{width: '100%', justifyContent: 'center', flex: 1}}>
          {attachment && (
            <Image
              source={{uri: attachment}}
              style={{width: '100%', height: height(20)}}
              resizeMode="contain"
            />
          )}
        </View>
      </View>
    </Modal>
  );
};
