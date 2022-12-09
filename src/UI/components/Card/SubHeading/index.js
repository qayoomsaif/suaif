import React, {  } from 'react'
import { Text } from 'react-native'
import gStyle from '../../gStyle'
export function SubHeading({
    text,
    style,
    ...props
}) {
    return (
        text ?
            <Text style={[gStyle.subHeadingText, { alignItems: 'flex-start' }, style && style]}>
                {text}
            </Text> : null
    )
}
SubHeading.defaultProps = {
    text: '',
    style: {},
}
