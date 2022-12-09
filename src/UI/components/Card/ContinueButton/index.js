import React, {  } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import gStyle from '../../gStyle'
export function ContinueButton({
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
            style={[gStyle.activeBtn(isActive), style && style]}>
            <Text style={[gStyle.activeBtnText(isActive), textStyle && textStyle]}>
                {text}
            </Text>

        </TouchableOpacity>
    )
}

ContinueButton.defaultProps = {
    disabled: false,
    text: 'Continue',
    style: {},
    textStyle: {},
    onPress: () => { },
    isActive: true,
}
