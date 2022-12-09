import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { useColors } from '../../GlobalStyle/color';

export const SectionModal = ({
    title = '',
    subTitle = '',
    isVisible,
    subTitile = '',
    description = '',
    isFooter = '',
    btnTitle = '',
    progressInfo = '',
    infoText = '',
    onCancel = () => { },
}) => {
    const colorList = useColors();
    const refStyle = styles(colorList);
    return (
        <>
            {
                isVisible && <View style={refStyle.sectionModal}>
                    <View style={refStyle.titleContainer}>
                    <Text style={refStyle.title}>{title}</Text>
                    <Text style={refStyle.subTitle}> {subTitle}</Text>
                    </View>
                    <Text style={refStyle.description}>{description}</Text>
                    {
                        isFooter &&  <View style={refStyle.sectionModalFooter}>
                        <View style={refStyle.progressTile}>
                        <Text style={refStyle.progressCounter}>0/9</Text>
                        </View>
                        <Text style={refStyle.progressInfo}>{progressInfo}</Text>
                        </View>
                    }
                   
                </View>
            }
        </>
    );
};
