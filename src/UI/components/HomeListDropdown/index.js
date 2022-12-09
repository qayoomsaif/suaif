import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useColors} from '../../GlobalStyle/color';
import {useNavigation} from '@react-navigation/native';
import {RightArrow, ImagePlaceholder, AddIcon, ArrowDown} from 'SVG';
export const HomeListDropdown = ({title = '',onPress=()=>{}, assets = [], id="", showProfile=()=>{}}) => {
  const colorList = useColors();
  const refStyle = styles(colorList);
  const navigation = useNavigation();
  const [isOpened, setisOpened] = useState(false);
  const toggleDropdown = () => {
    if(id == 0){
      showProfile(true)
    }else{
      setisOpened(!isOpened);
    }
  };
  const addNewAsset = () => {
  }
  return (
      <View>
    <TouchableOpacity style={refStyle.container} 
      onPress={toggleDropdown}
    >
      <Text style={refStyle.title}>{title}</Text>
      {isOpened ? <ArrowDown width={'18'} height={'26'}/> : <RightArrow  width={'13'} height={'20'}/>}
    </TouchableOpacity>
    {isOpened && (
        <View>
            {
                assets.map(function (asset, index) {
                    return <><View style={{margin:20, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <ImagePlaceholder />
                        <Text style={refStyle.expandedHeading}>{asset.assetName}</Text></View>
                        <RightArrow  width={'13'} height={'20'}/>
                </View>
                <View style={refStyle.lineSeprator}></View>
                </>
                
                })
            }
       
        <TouchableOpacity onPress={addNewAsset}>
        <View style={{marginTop:20, marginLeft:20, marginBottom:14, flexDirection:'row'}}>
            <AddIcon width={'26'} height={'26'} fill={"#277777"} />
            <Text style={refStyle.expandedHeading}>Add New Entry</Text>
        </View>
        </TouchableOpacity>
        </View>
    )}
    </View>
  );
};
