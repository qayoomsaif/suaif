import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
} from 'react-native';
import {
  Button,
  Header,
  ScreenWrapper,
} from '../../../../components';
import BackGroundImage from '../../../../assets/Background/Background.png';
import { useColors } from '../../../../GlobalStyle/color';
import styles from './styles';
import { height, width } from 'react-native-dimension';
import { TextInputComponent } from '../../../../components/TextInput';
import { useDispatch } from 'react-redux';
import { EncryptionHeader } from '../../../../components/AllHeaders/EncryptionHeader';
import { Dropdown } from '../../../../components/Dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { birthdayFormat } from '../../../../../Factory/utils';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
export default PersonalProfilePage2 = ({ route, navigation, ...props }) => {
  const color = useColors();
  const refStyle = styles(color);
  const [email, setEmail] = useState('');
  const [passwod, setPasswod] = useState('');
  const [fname, setFname] = useState('');
  const [LastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [isDatePickerVisible, setisDatePickerVisible] = useState(false);
  const data = [
    {
      id: 1,
      name: 'Male',
    },
    {
      id: 2,
      name: 'Female',
    },
    {
      id: 3,
      name: 'Agender',
    },
  ];
  const dispatch = useDispatch();
  const handleConfirm = (date) => {
    setDob(moment(date).format("MM/DD/YYYY"))
    setisDatePickerVisible(false);
  };
  return (
    <ScreenWrapper
      backgroundColor={color.primaryColor}
      statusBarColor={color.primaryColor}
      // scrollEnabled
      headerUnScrollable={() => (
        <>
          <Header
            title={'Personal Info'}
            userIcon={false}
            leftIconText={'BACK'}
            leftTextFontSize={14}
            textStyle={{ marginLeft: width(1) }}
            onPressLeft={() => navigation.goBack()}
          />
          <EncryptionHeader />
        </>
      )}>
      <ImageBackground source={BackGroundImage} style={refStyle.bgImage}>
        <KeyboardAwareScrollView contentContainerStyle={{ paddingBottom: height(35) }}>
          <View style={refStyle.container}>
            <View style={refStyle.loginContainer}>
              <Text style={refStyle.heading}>Personal Information</Text>
              <Text style={refStyle.subHeading}>
                View or edit your personal information.
              </Text>
              <TextInputComponent
                continerStyle={refStyle.textInputContainer}
                placeholder={'First Name'}
                value={fname}
                onChangeText={setFname}
              />
              <TextInputComponent
                continerStyle={refStyle.textInputContainer}
                placeholder={'Middle Name'}
                value={middleName}
                onChangeText={setMiddleName}
              />
              <TextInputComponent
                continerStyle={refStyle.textInputContainer}
                placeholder={'Last Name'}
                value={LastName}
                onChangeText={setLastName}
              />
              <TextInputComponent
                continerStyle={refStyle.textInputContainer}
                placeholder={'Email Address'}
                value={email}
                onChangeText={setEmail}
                keyboardType={'email-address'}
              />
              <TextInputComponent
                continerStyle={refStyle.textInputContainer}
                placeholder={'Birthdate (MM/DD/YYYY)'}
                value={dob}
                onFocus={() => {
                  setisDatePickerVisible(true);
                }}
                keyboardType={'numeric'}
              />
              <TextInputComponent
                continerStyle={refStyle.textInputContainer}
                placeholder={'Phone Number'}
                value={phoneNo}
                keyboardType={'phone-pad'}
                onChangeText={val => setPhoneNo(val)}
                maxLength={11}
              />
              <Dropdown
                containerStyle={refStyle.dropdown}
                placeHolder={'Gender'}
                data={data}
                selectedItem={gender}
                onPress={val => setGender(val)}
                dropwdownContainer={{ top: height(6.5), width: '100%' }}
              />
              <Button
                containerStyle={refStyle.button}
                bgColor={
                  fname.length === 0 ||
                    middleName.length === 0 ||
                    middleName.length === 0 ||
                    email?.length === 0 ||
                    dob.length === 0 ||
                    phoneNo.length === 0 ||
                    gender.length === 0
                    ? color.texttColor3
                    : color.subHeadingColor1
                }
                title="Next"
                onPress={() => {
                  if (fname.length === 0 ||
                    middleName.length === 0 ||
                    middleName.length === 0 ||
                    email?.length === 0 ||
                    dob.length === 0 ||
                    phoneNo.length === 0 ||
                    gender.length === 0
                    ? color.texttColor3
                    : color.subHeadingColor1)
                    navigation.navigate('PersonalInfo2')
                }}
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={() => setisDatePickerVisible(false)}
              />
            </View>
            {/* <Image /> */}
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </ScreenWrapper>
  );
};
