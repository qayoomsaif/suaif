import React, {  } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import {
    color,
} from 'globalStyle'
import styles from './style'
export function SelectionButton({
    onPress,
    disabled,
    value,
    isErr,
    placeholder,
    textStyle,
    style,
    numberOfLines,
    multiline,
    ...props
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.container, style && style, isErr && { borderColor: color.app }]}>
            <Text
                style={[styles.inputBlock, textStyle, !value && { color: color.textLight }]}
                value={value}
                multiline={multiline}
                numberOfLines={numberOfLines}
            >
                {value ? value : placeholder}
            </Text>
        </TouchableOpacity >
    )
}

SelectionButton.defaultProps = {
    onPress: () => { },
    disabled: false,
    value: '',
    isErr: false,
    multiline: false,
    numberOfLines: 1,
    placeholder: '',
    textStyle: {},
    style: {},
}
