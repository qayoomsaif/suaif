import React, {useState} from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {Button, Header, ScreenWrapper} from '../../../../components';
import BackGroundImage from '../../../../assets/Background/Background.png';
import {useColors} from '../../../../GlobalStyle/color';
import styles from './styles';
import {height, width} from 'react-native-dimension';
import {TextInputComponent} from '../../../../components/TextInput';
import {useDispatch} from 'react-redux';
import {EncryptionHeader} from '../../../../components/AllHeaders/EncryptionHeader';
import {Dropdown} from '../../../../components/Dropdown';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export default PersonalProfilePage1 = ({route, navigation, ...props}) => {
  const color = useColors();
  const refStyle = styles(color);
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [apt, setApt] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [satatesData, setSatatesData] = useState([]);
  const CountryData = [
    {
      id: 1,
      name: 'USA',
      states: [
        {
          id: 1,
          name: 'Calfornia',
        },
        {
          id: 2,
          name: 'Texas',
        },
      ],
    },
    {
      id: 2,
      name: 'Canada',
      states: [
        {
          id: 1,
          name: 'Alberta.',
        },
        {
          id: 2,
          name: 'Manitoba.',
        },
      ],
    },
  ];
  const dispatch = useDispatch();
  return (
    <ScreenWrapper
      backgroundColor={color.primaryColor}
      statusBarColor={color.primaryColor}
      headerUnScrollable={() => (
        <>
          <Header
            title={'Personal Info'}
            userIcon={false}
            leftIconText={'BACK'}
            leftTextFontSize={14}
            textStyle={{marginLeft: width(1)}}
            onPressLeft={() => navigation.goBack()}
          />
          <EncryptionHeader />
        </>
      )}>
      <ImageBackground source={BackGroundImage} style={refStyle.bgImage}>
        <KeyboardAwareScrollView>
          <View style={refStyle.container}>
            <View style={refStyle.loginContainer}>
              <Text style={refStyle.heading}>Personal Information</Text>
              <Text style={refStyle.subHeading}>
                View or edit your personal information.
              </Text>
              <TextInputComponent
                continerStyle={refStyle.textInputContainer}
                placeholder={'Street Address'}
                value={streetAddress}
                onChangeText={setStreetAddress}
              />
              <TextInputComponent
                continerStyle={refStyle.textInputContainer}
                placeholder={'Apt, Suite, Etc.'}
                value={apt}
                onChangeText={setApt}
              />
              <TextInputComponent
                continerStyle={refStyle.textInputContainer}
                placeholder={'City'}
                value={city}
                onChangeText={setCity}
              />
              <Dropdown
                containerStyle={[refStyle.dropdown]}
                placeHolder={'Country'}
                data={CountryData}
                selectedItem={country}
                onPress={val => {
                  const index = CountryData.findIndex(
                    item => item?.name === val,
                  );
                  if (index != -1) setSatatesData(CountryData[index]?.states);
                  setCountry(val);
                  setState('');
                }}
                dropwdownContainer={{top: height(6.5), width: '100%'}}
              />
              <Dropdown
                containerStyle={refStyle.dropdown}
                placeHolder={'State'}
                data={satatesData}
                selectedItem={state}
                onPress={val => setState(val)}
                dropwdownContainer={{top: height(6.5), width: '100%'}}
                zIndex={10}
              />
              <TextInputComponent
                continerStyle={refStyle.textInputContainer}
                placeholder={'Zip Code / Postal Code'}
                value={postalCode}
                keyboardType={'numeric'}
                onChangeText={val => {
                  setPostalCode(val);
                }}
              />

              <Button
                containerStyle={refStyle.button}
                bgColor={
                  streetAddress.length === 0 ||
                  city?.length === 0 ||
                  postalCode.length === 0 ||
                  state.length === 0 ||
                  country.length === 0
                    ? color.texttColor3
                    : color.subHeadingColor1
                }
                title="Next"
                onPress={()=>{
                  (
                    streetAddress.length > 0 &&
                    city?.length >0 &&
                    postalCode.length > 0 &&
                    state.length >0 &&
                    country.length >0
                  )
                  &&
                  navigation.navigate('UploadProfileImage')
                }}
              />
            </View>
            {/* <Image /> */}
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </ScreenWrapper>
  );
};
