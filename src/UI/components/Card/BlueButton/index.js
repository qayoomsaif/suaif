import React, {  } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './style'
export function BlueButton({
    style,
    text,
    textStyle,
    onPress,
    isActive,
    disabled,
    ...props
}) {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[styles.container, style && style]}>
            <Text
                style={[styles.text, textStyle && textStyle]}
            >
                {text}
            </Text>

        </TouchableOpacity>
    )
}

BlueButton.defaultProps = {
    disabled: false,
    text: 'Continue',
    style: {},
    textStyle: {},
    onPress: () => { },
    isActive: true,
}
