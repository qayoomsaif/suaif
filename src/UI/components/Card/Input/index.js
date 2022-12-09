import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, Image, Keyboard } from 'react-native'
import {
    color,
    hp,
    wp,
} from 'globalStyle'
import styles from './style'
export function Input({
    editText,
    value,
    editable,
    placeholderTextColor,
    placeholder,
    onChangeText,
    isKeyboardShow,
    onSubmitEditing,
    onFocus,
    ref,
    inputBlckStyle,
    underlineColorAndroid,
    keyboardType,
    returnKeyType,
    selectionColor,
    autoCapitalize,
    multiline,
    maxLength,
    numberOfLines,
    autoCorrect,
    secureTextEntry,
    autoFocus,
    spellCheck,
    defaultValue,
    isErr,
    containerStyle,
    isIcon,
    onOpntion,
    opntionButtonStyle,
    iconPath,
    Icon,
    iconSize,
    iconStyle,
    title,
    titleStyle,
    styleBlock,
    style,
    enableOption,
    onBlur,
    ...props
}) {
    const [keyboardShow, setKeyboardShow] = useState(false)
    useEffect(() => {
        let showListener = Keyboard.addListener('keyboardDidShow', () => { setKeyboardShow(true) })
        let hideListener = Keyboard.addListener('keyboardDidHide', () => { setKeyboardShow(false) })
        return () => {
            showListener.remove();
            hideListener.remove();
        }

    }, [keyboardShow])
    useEffect(() => {
        // let showListener = Keyboard.addListener('keyboardDidShow', () => { isKeyboardShow(true); setKeyboardShow(true) })
        // let hideListener = Keyboard.addListener('keyboardDidHide', () => { isKeyboardShow(true); setKeyboardShow(false) })
        isKeyboardShow(keyboardShow)
        // return () => {
        //     showListener.remove();
        //     hideListener.remove();
        // }
    }, [keyboardShow])

    return (
        isIcon ?
            <View style={[styles.container(isErr), containerStyle && containerStyle, style, styleBlock,]}>
                {title ? <Text style={[styles.titleText, titleStyle,]}>{title}</Text> : null}
                <TextInput
                    style={[styles.inputBlock1, inputBlckStyle,]}
                    value={value}
                    editable={editable}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    maxLength={maxLength}
                    multiline={multiline}
                    keyboardType={keyboardType}
                    ref={r => ref(r)}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType={returnKeyType}
                    numberOfLines={numberOfLines}
                    selectionColor={selectionColor}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    secureTextEntry={secureTextEntry}
                    onFocus={() => { isKeyboardShow(true); onFocus }}
                    onBlur={() => { isKeyboardShow(false); onBlur }}
                    autoFocus={autoFocus}
                    spellCheck={spellCheck}
                    defaultValue={defaultValue}
                />
                <TouchableOpacity
                    onPress={onOpntion}
                    disabled={!enableOption}
                    style={[styles.buttonNegative, opntionButtonStyle]}>
                    {Icon ? <Icon
                        height={hp(20)}
                        width={hp(20)}
                    /> : iconPath ? <Image
                        source={iconPath}
                        resizeMode={'contain'}
                        style={[styles.icon, iconStyle]}
                    /> : null}
                </TouchableOpacity>
            </View> : <View style={[styleBlock && styleBlock]}>
                {title ? <Text style={[styles.titleText, titleStyle,]}>{title}</Text> : null}
                <TextInput
                    style={[styles.inputBlock(isErr), inputBlckStyle, style && style]}
                    value={value}
                    editable={editable}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    maxLength={maxLength}
                    multiline={multiline}
                    keyboardType={keyboardType}
                    ref={r => ref(r)}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType={returnKeyType}
                    numberOfLines={numberOfLines}
                    selectionColor={selectionColor}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    secureTextEntry={secureTextEntry}
                    onFocus={onFocus}
                    autoFocus={autoFocus}
                    spellCheck={spellCheck}
                    defaultValue={defaultValue} />
            </View>
    )
}

Input.defaultProps = {
    editText: true,
    enableOption: true,
    value: '',
    editable: true,
    placeholderTextColor: color.placeholder,
    placeholder: '',
    title: '',
    onChangeText: () => { },
    isKeyboardShow: () => { },
    style: {},
    onSubmitEditing: () => { },
    onFocus: () => { },
    onOpntion: () => { },
    ref: () => { },
    onBlur: () => { },
    inputBlckStyle: {},
    titleStyle: {},
    styleBlock: {},
    iconStyle: {},
    iconSize: wp(20),
    opntionButtonStyle: {},
    underlineColorAndroid: 'transparent',
    keyboardType: "default",
    returnKeyType: 'default',
    selectionColor: color.app,
    autoCapitalize: 'none',
    multiline: false,
    maxLength: 80,
    numberOfLines: 1,
    autoCorrect: false,
    secureTextEntry: false,
    autoFocus: false,
    spellCheck: false,
    defaultValue: '',
    isErr: false,
    isIcon: false,
    containerStyle: {},
    Icon: undefined,
    iconPath: '',
}
