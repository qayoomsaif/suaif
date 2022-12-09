import React, {useImperativeHandle, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {height} from 'react-native-dimension';
import styles from './style';
import {useColors} from '../../GlobalStyle/color';
export const TextInputComponent = React.forwardRef(
  (
    {
      value = '',
      placeholder = '',
      required = null,
      keyboardType = 'default',
      maxLength = null,
      multiline = false,
      numberOfLines = null,
      editable = true,
      onFocus = () => {},
      onBlur = () => {},
      secureTextEntry = false,
      onChangeText = undefined,
      continerStyle = {},
      returnKeyType = 'next',
      onSubmitEditing = () => {},
    },
    ref,
  ) => {
    const inputRef = useRef(null);
    const [localValue, setLocalValue] = useState(value);
    const color = useColors();
    const refStyle = styles(color);
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
      blur: () => {
        inputRef.current.blur();
      },
      getValue: () => {
        return localValue;
      },
      setValue: val => {
        setLocalValue(val);
      },
    }));
    return (
      <TextInput
        editable={editable}
        ref={inputRef}
        placeholder={placeholder}
        placeholderTextColor={color.borderColor}
        style={[
          refStyle.container,
          continerStyle,
          multiline && {
            textAlignVertical: 'top',
            minHeight: height(10),
            maxHeight: height(14),
          },
        ]}
        keyboardType={keyboardType}
        onFocus={() => onFocus()}
        secureTextEntry={secureTextEntry}
        onBlur={() => onBlur()}
        multiline={multiline}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        value={localValue}
        onChangeText={val => {
          setLocalValue(val);
          if (onChangeText) onChangeText(val);
        }}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
      />
    );
  },
);
