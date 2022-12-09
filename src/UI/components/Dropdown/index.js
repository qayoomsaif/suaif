import React, {useState, useMemo} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import styles from './styles';
import {useColors} from '../../GlobalStyle/color';
import {RightArrow} from 'SVG';
import {font} from '../../GlobalStyle/font';
export const Dropdown = ({
  data = [],
  selectedItem = '',
  containerStyle = {},
  placeHolder = {},
  onPress,
  onPressExcutor = () => {},
  dropwdownContainer = {},
  zIndex = 200,
  displayExcutor = false,
  isHiglightedBg = false,
  returnItem = false,
}) => {
  const colorList = useColors();
  const refStyle = styles(colorList);
  const [isOpened, setisOpened] = useState(false);
  const toggleDropdown = () => {
    setisOpened(!isOpened);
  };
  return (
    <View style={{zIndex: zIndex}}>
      <TouchableOpacity
        onPress={toggleDropdown}
        style={[refStyle.container, containerStyle]}>
        <View style={refStyle.selectedItem}>
          <Text
            style={[
              refStyle.selectedText,
              selectedItem === '' && {color: colorList.borderColor},
            ]}>
            {selectedItem == '' ? placeHolder : selectedItem}
          </Text>
          <RightArrow width={'12'} height={'17'} />
        </View>
        {}
      </TouchableOpacity>
      {isOpened && (
        <View style={[refStyle.expandedContainer, dropwdownContainer]}>
          {data &&
            data?.map(function (item, index) {
              return (
                <TouchableOpacity
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor:
                      (item?.name === selectedItem && isHiglightedBg) ||
                      (index === data.length - 1 && displayExcutor)
                        ? 'rgba(102, 195, 196, 0.4)'
                        : colorList.background,
                  }}
                  key={index}
                  onPress={() => {
                    if (index === data.length - 1 && displayExcutor)
                      onPressExcutor?.();
                    else onPress?.(returnItem ? item : item?.name);
                    toggleDropdown();
                  }}>
                  <Text style={ {margin: 12, color: (index === data.length - 1 && displayExcutor)?colorList.subHeadingColor1: colorList.textColor2}}>
                    {item?.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      )}
    </View>
  );
};
