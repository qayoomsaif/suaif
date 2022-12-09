import React, {useState, useEffect, useRef} from 'react';
import {View, ImageBackground, Text, Keyboard} from 'react-native';
import {Button, HeaderWithTitle, ScreenWrapper} from '../../../components';
import BackGroundImage from '../../../assets/Login/background.png';
import {useColors} from '../../../GlobalStyle/color';
import styles from './style';
import {GoogleIcon, AppleIcon} from 'SVG';
import {height, totalSize, width} from 'react-native-dimension';
import {TextInputComponent} from '../../../components/TextInput';
import {ButtonWithLogo} from '../../../components/ButtonWithLogo';
import {useDispatch} from 'react-redux';
import {setSingupUserData} from '../../../../redux-store/user';
export default SiginIn = ({route, navigation, ...props}) => {
  const color = useColors();
  const refStyle = styles(color);
  const [email, setEmail] = useState('');
  const [passwod, setPasswod] = useState('');
  const dispatch = useDispatch();
  const [displayBottom, setDisplayBottom] = useState(true);
  function onKeyboardDidShow(e) {
    setDisplayBottom(false);
  }

  function onKeyboardDidHide() {
    setDisplayBottom(true);
  }
  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  const emailRef = useRef(null);
  const paswdRef = useRef(null);
  return (
    <ScreenWrapper
      backgroundColor={color.background}
      headerUnScrollable={() => <HeaderWithTitle />}>
      <View style={refStyle.container}>
        <View style={refStyle.loginContainer}>
          <Text style={refStyle.loginText}>Login</Text>
          <TextInputComponent
            placeholder={'Email'}
            keyboardType={'email-address'}
            continerStyle={{width: width(72)}}
            ref={emailRef}
            onChangeText={(val)=>setEmail(val)}
            onSubmitEditing={() => paswdRef?.current.focus()}
          />
          <TextInputComponent
            placeholder={'Passowrd'}
            keyboardType={'email-address'}
            secureTextEntry={true}
            continerStyle={{width: width(72)}}
            ref={paswdRef}
            returnKeyType={'done'}
            onChangeText={(val)=>setPasswod(val)}
          />
          {console.log(emailRef.current?.getValue()?.length)}
          {console.log(paswdRef.current?.getValue()?.length > 3)}
          <Button
            title={'Continue'}
            containerStyle={refStyle.continueBtn}
            bgColor={
              (emailRef.current?.getValue()?.length > 0 &&
              paswdRef.current?.getValue()?.length > 3)
                ? color.buttonColor1
                : color.texttColor3
            }
            onPress={() => {
              console.log('Password Value ',  emailRef.current?.getValue()?.length , paswdRef.current?.getValue()?.length);
              if (
                emailRef.current?.getValue().length > 0 &&
                paswdRef.current?.getValue().length > 3
              ) {
                dispatch(
                  setSingupUserData({
                    email,
                    passwod,
                  }),
                );
                navigation.navigate('MainTab');
              }
            }}
          />
          <ButtonWithLogo
            logo={<GoogleIcon />}
            title={'Sign in with Google'}
            containerStyle={refStyle.logoBtnContainer}
          />
          <ButtonWithLogo
            logo={<AppleIcon />}
            title={' Sign in with Apple'}
            containerStyle={refStyle.logoBtnContainer}
          />
          <View style={refStyle.bottomTextContainer}>
            <Text style={refStyle.dontText}>Don’t have an account?</Text>
            <Button
              containerStyle={refStyle.signupBtn}
              title={'Sign Up'}
              textStyle={{fontSize: width(4)}}
              bgColor={color.subHeadingColor1}
            />
          </View>
          <View style={refStyle.lowerTextContainer}>
            <Text style={refStyle.highlightText}>Forgot Password</Text>
            <View
              style={{
                width: width(0.6),
                height: height(3),
                backgroundColor: color.subHeadingColor1,
              }}
            />
            <Text style={refStyle.highlightText}>Forgot Username</Text>
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: height(4.5),
            zIndex: 100,
            opacity: displayBottom ? 1 : 0,
          }}>
          <Text style={refStyle.copyRightText}>
            ©2022 Suaif.com. All rights reserved. Patent Pending.
          </Text>
          <View style={refStyle.bottomContainer}>
            <Text style={refStyle.termsConditionText}>Privacy Policy</Text>
            <Text
              style={[refStyle.termsConditionText, {fontSize: totalSize(1.5)}]}>
              |
            </Text>
            <Text style={refStyle.termsConditionText}>Terms</Text>
          </View>
        </View>
        <ImageBackground
          source={BackGroundImage}
          style={refStyle.bgImage}></ImageBackground>
      </View>
    </ScreenWrapper>
  );
};
