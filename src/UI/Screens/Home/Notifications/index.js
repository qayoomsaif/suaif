import React from 'react';
import {View, Text} from 'react-native';
import {Header, ScreenWrapper} from '../../../components';
import style from './style';
import {useColors} from '../../../GlobalStyle/color';
import {EncryptionHeader} from '../../../components/AllHeaders/EncryptionHeader';
import {font} from '../../../GlobalStyle/font';
import { useSelector } from 'react-redux';

export default Notfications = props => {
  const colorList = useColors();
  const innerStyle = style(colorList);
  const executors = useSelector(state => state.executor?.executors);
  console.log("Executors ",executors)
  const B = props => (
    <Text style={{fontFamily: font.one.Medium, fontWeight: 'bold'}}>
      {props.children}
    </Text>
  );

  return (
    <ScreenWrapper
      backgroundColor={colorList.primaryColor}
      statusBarColor={colorList.primaryColor}
      backgroundColorContainer={colorList.background}
      lightContent={true}
      // contentContainerStyle={{
      //   paddingBottom: !isLOgin && totalSize(69),
      // }}
      headerUnScrollable={() => (
        <Header
          userIcon={false}
          leftIconText={'BACK'}
          textStyle={{fontWeight: 'bold', paddingLeft: 3}}
          leftTextFontSize={14}
          title={'Notifications'}
          onPressLeft={() => props.navigation.goBack()}
        />
      )}>
      <View style={innerStyle.container}>
        <EncryptionHeader />
        <View
          style={innerStyle.notifyConatainer}>
          <Text
            style={innerStyle.text}>
            Ellen Lupton <B>Accepted</B> to become your executor.{' '}
          </Text>
          <View
            style={innerStyle.line}
          />
          <Text
            style={innerStyle.text}>
            Success! You have completed your profile.{' '}
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};
