import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {LoginBg1} from '../../../assets';
import {Button, Header, ScreenWrapper} from '../../../components';
import {useColors} from '../../../GlobalStyle/color';
import style from './style';
import {Logo, GoogleIcon, AppleIcon, RightArrow} from 'SVG';
import {ButtonWithLogo} from '../../../components/ButtonWithLogo';
import {height} from 'react-native-dimension';
export default InitialSignIn = ({route, navigation, ...props}) => {
  const color = useColors();
  const innerStyle = style(color);
  const text = 'SUAIF';
  return (
    <ScreenWrapper
      statusBarColor={color.primaryColor}
      headerUnScrollable={() => (
        <Header
          leftIconText="Back to home"
          userIcon={false}
          textStyle={innerStyle.textStyle}
          rightIcon={false}
          onPressLeft={() => navigation.goBack()}
          leftTextFontSize={14}
          leftConatinerStyle={innerStyle.leftHeader}
        />
      )}
      backgroundColor={color.primaryColor}>
      <View style={innerStyle.container}>
        <ImageBackground
          source={LoginBg1}
          resizeMode={'cover'}
          style={innerStyle.bgImage}>
          <View style={innerStyle.logoContainer}>
            {/* <Logo /> */}
          </View>
          <Text style={innerStyle.h1}>{text}</Text>
        </ImageBackground>
        <View style={innerStyle.middileConatiner}>
          <Button
            title={'LOGIN'}
            containerStyle={innerStyle.loginBtn}
            onPress={() => navigation.navigate('signIn')}
          />
          <ButtonWithLogo
            textStyle={{alignSelf: 'center', marginLeft: 24}}
            logo={<AppleIcon />}
            title={'CONTINUE WITH APPLE'}
          />
          <ButtonWithLogo
            logo={<GoogleIcon />}
            textStyle={{alignSelf: 'center'}}
            title={'CONTINUE WITH GOOGLE'}
          />
          <Button
            title={'CREATE MY ACCOUNT'}
            containerStyle={innerStyle.createaccountBtn}
            textStyle={innerStyle.createBtnText}
            bgColor={color.background}
          />
          <View style={innerStyle.guesContainer}>
            <Text style={innerStyle.continueGuest}>CONTINUE AS GUEST</Text>
            <RightArrow />
          </View>
        </View>
        <View style={innerStyle.bottomContainer}>
          <Text style={innerStyle.bySigininText}>
            By signing up, you're agreeing to our{' '}
          </Text>
          <View style={innerStyle.lowerTextContainer}>
            <Text style={innerStyle.higlightText}> Privacy Policy </Text>
            <Text style={[innerStyle.bySigininText, {marginTop: height(0.5)}]}>
              {' '}
              and
            </Text>
            <Text style={innerStyle.higlightText}> Terms of Service</Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};
