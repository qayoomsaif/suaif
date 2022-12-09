import React, {  } from 'react'
import { Text } from 'react-native'
import gStyle from '../../gStyle'
export function Heading({
    text,
    style,
    ...props
}) {
    return (
        text ?
            <Text style={[gStyle.headingText, { alignItems: 'flex-start' }, style && style]}>
                {text}
            </Text> : null
    )
}
Heading.defaultProps = {
    text: '',
    style: {},
}
