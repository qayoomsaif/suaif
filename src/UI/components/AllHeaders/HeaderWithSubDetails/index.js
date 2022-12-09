import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import MI from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Router} from 'Factory';
export const HeaderWithSubDetails = ({
  onPress,
  title,
  subDetail,
  backText,
  option,
  onPressOption,
  optionTextStyle,
  iconColor,
  iconSize,
  subDetailTextStyle,
  titleTextStyle,
  isCross,
  OptionIcon,
  backTextStyle,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={() => (onPress ? onPress() : Router.back())}>
          {!backText ? (
            isCross ? (
              <MI
                name={'close'}
                size={iconSize ? iconSize : styles.iconSize}
                color={iconColor ? iconColor : '#000'}
                style={styles.backButton}
              />
            ) : (
              <AntDesign
                name={'arrowleft'}
                size={iconSize ? iconSize : styles.iconSize}
                color={iconColor ? iconColor : '#000'}
                style={styles.backButton}
              />
            )
          ) : (
            <Text style={[styles.backText, backTextStyle]}>{backText}</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.centerBlock}>
        {title ? (
          <Text style={[styles.titleText, titleTextStyle]}>{title}</Text>
        ) : null}
        {subDetail ? (
          <Text style={[styles.subDetailText, subDetailTextStyle]}>
            {subDetail}
          </Text>
        ) : null}
      </View>
      <View style={styles.optionBlockContainer}>
        {option || OptionIcon ? (
          <TouchableOpacity
            style={styles.optionBlock}
            onPress={() => (onPressOption ? onPressOption() : null)}>
            {OptionIcon ? (
              <OptionIcon />
            ) : (
              <Text style={[styles.optionText, optionTextStyle]}>{option}</Text>
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

HeaderWithSubDetails.defaultProps = {
  isCross: false,
  disabled: false,
  backText: '',
  iconSize: null,
  style: {},
  backstyle: {},
  backTextStyle: {},
  optionTextStyle: {},
  subDetailTextStyle: {},
  titleTextStyle: {},
  onPressOption: () => {},
  onPress: null,
  iconColor: '#000',
  OptionIcon: null,
};
