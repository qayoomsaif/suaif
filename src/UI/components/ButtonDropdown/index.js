import React, {useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import styles from './styles';
import {useColors} from '../../GlobalStyle/color';
import { font } from '../../GlobalStyle/font';
export const ButtonDropdown = ({data = [], selectedItem = '',containerStyle={},placeHolder={},onPress, dropwdownContainer={},zIndex=250,
marginTop=15,
}) => {
  const colorList = useColors();
  const refStyle = styles(colorList);
  const [isOpened, setisOpened] = useState(false);
  const toggleDropdown = () => {
    setisOpened(!isOpened);
  };
  return (
    <View >
      <View style={{zIndex: zIndex}}>
      <TouchableOpacity onPress={toggleDropdown} style={[refStyle.uploadButton,containerStyle,{marginTop:marginTop}]}>
        
          <Text style={refStyle.uploadButtonText}>Upload</Text>
          <Text
            style={{
              fontSize: 36,
              fontWeight: 'bold',
              marginLeft: 20,
              color: '#FFFFFF',
              marginTop: -4,
            }}>
            +
          </Text>
        
        {}
      </TouchableOpacity>
      </View>
      {isOpened && (
        
        <View style={[refStyle.expandedContainer, dropwdownContainer]}>
          {data.map(function (item, index) {
            return (
              <Text key={index} style={{margin: 10,color:colorList.textColor2}} onPress={()=>{
                onPress?.(item?.name)
                toggleDropdown()
              }}>
                {item.name}
              </Text>
            );
          })}
        </View>
       
      )}
    </View>
  );
};
