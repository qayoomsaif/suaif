import React, { Fragment } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useIsFocused, useTheme } from '@react-navigation/native';
import { height } from 'react-native-dimension';
export const ScreenWrapper = ({
  children,
  statusBarColor='white',
  transclucent = false,
  scrollEnabled = false,
  backgroundImage,
  containerViewStyle = {},
  imageStyle={},
  contentContainerStyle = {},
  headerUnScrollable = () => null,
  footerUnScrollable = () => null,
  lightContent=false,
  backgroundColor = 'white',
  backgroundColorContainer='white'
}) => {
  if (backgroundImage)
    backgroundColor = 'white'
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }
  const content = () => {
    return (<View style={{backgroundColor:backgroundColor,flex:1}}>
      {headerUnScrollable()}
      <View style={[styles.mainViewContainer, containerViewStyle, { backgroundColor: backgroundColorContainer }]}>
        {scrollEnabled ? (
          <KeyboardAwareScrollView
            contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={height(8)}
            showsVerticalScrollIndicator={false}>
            {children}
          </KeyboardAwareScrollView>
        ) : (
          children
        )}
        {footerUnScrollable()}
      </View>
    </View>
    )
  }
  const theme= useTheme()
  return (
    <Fragment>
      <FocusAwareStatusBar
        barStyle={lightContent?'light-content': theme.dark?'light-content':'dark-content'}
        backgroundColor={statusBarColor}
        translucent={transclucent}
      />
      {!transclucent && (
        <SafeAreaView style={{ backgroundColor: backgroundColor }} />
      )}
      {backgroundImage ? <ImageBackground source={backgroundImage} style={[styles.container,imageStyle]} resizeMode={'cover'}>
        {content()}
      </ImageBackground>
        :
        content()}
    </Fragment>
  );
};
