import React, {useState} from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {Button, Header, ScreenWrapper} from '../../../../components';
import BackGroundImage from '../../../../assets/Background/Background.png';
import {useColors} from '../../../../GlobalStyle/color';
import styles from './styles';
import {height, width} from 'react-native-dimension';
import {useDispatch} from 'react-redux';
import {EncryptionHeader} from '../../../../components/AllHeaders/EncryptionHeader';
import {ImagePicker} from 'Factory';
import {DpSection} from '../../../../components/DpSection';
import {ActionSheet} from '../../../../components/ActionSheet';
import {WlecomeModal} from '../../../../components/Modal';
import {Welcome4} from 'SVG';
export default UploadImage = ({route, navigation, ...props}) => {
  const color = useColors();
  const refStyle = styles(color);
  const [imageUri, setImageUri] = useState('');
  const [modalVis, setModalVis] = useState(false);
  const [welcomeModalVis, setWelcomeModalVis] = useState(false);
  const openAttachmentPicker = async type => {
    try {
      if (type == 'Camera') {
        let cameraClick = await ImagePicker.launchCamera();
        setImageUri(cameraClick?.attachments[0]?.uri ?? '');
        setModalVis(false);
      } else if (type == 'Camera Roll') {
        let imageFile = await ImagePicker.launchImageLibrary(
          (selectionLimit = 1),
        );
        setImageUri(imageFile?.attachments[0]?.uri ?? '');
        setModalVis(false);
      }
    } catch (error) {
      setModalVis(false);
    }
  };
 
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
        <View style={refStyle.container}>
          <View style={refStyle.loginContainer}>
            <Text style={refStyle.heading}>Add your Profile Picture</Text>
            <Text style={refStyle.subHeading}>Maximum file size 5MB.</Text>
            <DpSection
              onPress={() => setModalVis(true)}
              imageSource={imageUri}
              marginTop={height(3)}
              marginBottom={height(2)}
            />
            <Text
              style={
                refStyle.bottomText
              }>{`Tap here to add a fun ${'\n'} photo to your profile!`}</Text>
            <Button
              containerStyle={refStyle.button}
              title={'Next'}
              bgColor={
                imageUri == '' ? color.texttColor3 : color.subHeadingColor1
              }
              onPress={() => {
                if (imageUri != '')
                  setTimeout(() => {
                    setWelcomeModalVis(true);
                  }, 600);
              }}
            />
            <Button
              containerStyle={[
                refStyle.button,
                {
                  borderColor: color.subHeadingColor1,
                  borderWidth: width(1),
                },
              ]}
              title={'Skip'}
              bgColor={color.background}
              textStyle={{color:color.subHeadingColor1}}
            />
          </View>
        </View>
      </ImageBackground>
      <ActionSheet
        isVisible={modalVis}
        onCancel={() => setModalVis(false)}
        onPressCamera={() => {
          openAttachmentPicker('Camera');
        }}
        onPressLibraray={() => {
          openAttachmentPicker('Camera Roll');
        }}
      />
      <WlecomeModal
        isVisible={welcomeModalVis}
        icon={<Welcome4 width={'260'} height="188"/>}
        title={'Congratulations!'}
        subTitile={'You’ve successfully completed your personal profile!'}
        btnTitle={'Go To Home'}
        onCancel={() => setWelcomeModalVis(false)}
        subTitileStyle={refStyle.titleStyle}
        onPress={()=>{
          setWelcomeModalVis(false)
          navigation.navigate('Home')
        }}
      />
    </ScreenWrapper>
  );
};
