import React, { } from 'react';
import {
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { Header, ScreenWrapper } from '../../../components';
import style from './style';
import { useColors } from '../../../GlobalStyle/color';
import { EncryptionHeader } from '../../../components/AllHeaders/EncryptionHeader';
import { SectionModal } from '../../../components/SectionModal';
import { HomeData } from '../../../../Factory/DummyData/HomeData';
import { height } from 'react-native-dimension';
import { HomeList } from '../../../components/HomeList';
export default AddAssets = props => {
  const colorList = useColors();
  const innerStyle = style(colorList);
  const renderItem = ({ item, index }) => <HomeList title={item} onPress={() => {
    if (index === 0) { }
    // props.navigation.navigate("AssetsMenu")
  }} />
  return (
    <ScreenWrapper
      backgroundColor={colorList.primaryColor}
      statusBarColor={colorList.primaryColor}
      backgroundColorContainer={colorList.background}
      scrollEnabled={false}
      lightContent={true}
      // contentContainerStyle={{
      //   paddingBottom: !isLOgin && totalSize(69),
      // }}
      headerUnScrollable={() => (
        <Header userIcon={false} leftIconText={"BACK"}
          textStyle={{ fontWeight: 'bold', paddingLeft: 3 }}
          leftTextFontSize={14}
          title={'Home'}
          onPressLeft={() => props.navigation.goBack()}
        />
      )}
    >
      <EncryptionHeader />
      <View style={{ alignSelf: 'center' }}>

      </View>

    </ScreenWrapper>
  )
};

