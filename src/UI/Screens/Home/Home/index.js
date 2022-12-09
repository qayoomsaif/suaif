import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import style from './style';
import { ScreenWrapper } from '../../../components/ScreenWrapper';
import { useColors } from '../../../GlobalStyle/color';
import { Button, Header } from '../../../components';
import { totalSize } from 'react-native-dimension';
import { useSelector } from 'react-redux';
export default Home = ({ navigation, ...props }) => {
  const colorList = useColors();
  const innerStyle = style(colorList);
  const signUpData = useSelector(state => state?.user?.singupUserData);
  const [isLOgin, setIsLOgin] = useState(false);
  useEffect(() => {
    if (Object.keys(signUpData).length != 0) setIsLOgin(true);
    else setIsLOgin(false);
  }, [signUpData]);
  return (
    <ScreenWrapper
      backgroundColor={colorList.primaryColor}
      statusBarColor={colorList.primaryColor}
      backgroundColorContainer={colorList.background}
      scrollEnabled={!isLOgin ? true : false}
      lightContent={true}
      contentContainerStyle={{
        paddingBottom: !isLOgin && totalSize(69),
      }}
      headerUnScrollable={() => (
        <Header
          leftTextFontSize={14}
          title={!isLOgin ? 'Welcome' : 'Home'}
          displayNotifciation={isLOgin ? true : false}
          onPressNotification={() => navigation.navigate('Notifications')}
        />
      )}
      footerUnScrollable={() =>
        !isLOgin && (
          <Button
            containerStyle={innerStyle.btnContainer}
            title={'SIGN UP/LOGIN'}
            textStyle={innerStyle.btnText}
            onPress={() =>
              // navigation.navigate('PersonalInfo2')
              navigation.navigate('Login')
            }
          />
        )
      }>
      <View style={innerStyle.container}>

      </View>
    </ScreenWrapper>
  );
};
