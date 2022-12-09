export const color = {
  accent: '#AF2923',
  borderColor: '#C6C6C8',
  textplace: '#C5C5C7',
  placeholder: '#C5C5C7',
  textLight: '#8A8A8E',
  textBlue: '#0F9AFF',
  textDark: '#8E8E93',
  textheadingDark: '#111111',
  textBlack: '#000000',
  textWhite: '#FFFFFF',
  inputTextDark: '#8E8E93',

  // FFD90F
  inputTextDarkOp: color => (color ? '#8E8E93' + color.toString() : '#8E8E93'),
  placeholderOp: color => (color ? '#C5C5C7' + color.toString() : '#C5C5C7'),
  textplaceOp: color => (color ? '#C5C5C7' + color.toString() : '#C5C5C7'),
  textLightOp: color => (color ? '#8A8A8E' + color.toString() : '#8A8A8E'),
  textBlueOp: color => (color ? '#0F9AFF' + color.toString() : '#0F9AFF'),
  textDarkOp: color => (color ? '#8E8E93' + color.toString() : '#8E8E93'),
  textheadingDarkOp: color =>
    color ? '#111111' + color.toString() : '#111111',
  textBlackOp: color => (color ? '#FFD90F' + color.toString() : '#FFD90F'),
  blackOp: color => (color ? '#000000' + color.toString() : '#000000'),
  textWhiteOp: color => (color ? '#FFFFFF' + color.toString() : '#FFFFFF'),
  borderColorOp: color => (color ? '#C6C6C8' + color.toString() : '#C6C6C8'),

  btn: '#C7C7CC',
  activeBtn: '#FFD90F',
  unactiveBtn: '#C7C7CC',
  app: '#FFD90F',

  primary: '#FFD90F',
  bg: '#E9EFF4',
  dark: '#FFD90F',
  appDark: '#FFD90F',
  light: '#8A8A8E',
  appColor: '#FFD90F',
  black: '#000000',
  white: '#FFFFFF',

  btnOp: color => (color ? '#C7C7CC' + color.toString() : '#C7C7CC'),
  appOp: color => (color ? '#FFD90F' + color.toString() : '#FFD90F'),
  AppDarkOp: color => (color ? '#FFD90F' + color.toString() : '#FFD90F'),
  bgOp: color => (color ? '#E9EFF4' + color.toString() : '#E9EFF4'),
  darkOp: color => (color ? '#FFD90F' + color.toString() : '#FFD90F'),
  lightOp: color => (color ? '#FFD90F' + color.toString() : '#FFD90F'),
  whiteOp: color => (color ? '#FFFFFF' + color.toString() : '#FFFFFF'),

  // greyLight: '#c0c0c0',
  // greyDark: '#ADA9B3',

  // appLight: '#3997E6',
  // primary: '#0651A0',
  // light: '#6D7D8B',
  // white: '#FFFFFF',
  // black: '#000000',
  // dark: '#131313',
  // app: '#0651A0',
  // bg: '#CEDEEE',
};
// /

import {useTheme} from '@react-navigation/native';
interface Palette {
  background: string;
  background1:string,
  buttonColor1: string;
  textColor1: string;
  headingColor1: string;
  subHeadingColor1: string;
  descriptionColor1: string;
  primaryColor: string;
  textColor2: string;
  texttColor3: string;
  textColor4: string;
  borderColor:string,
  background3:string,
  red:string,
  borderColor1:string,
  borderColor2:string,
}
const dark: Palette = {
  background: '#000000',
  background1:'#F2F2F2',
  buttonColor1: '#374647',
  textColor1: '#000000',
  headingColor1: '#4F5164',
  subHeadingColor1: '#277777',
  descriptionColor1: '#545454',
  primaryColor: '#36474A',
  textColor2: '#FFFFFF',
  texttColor3: '#787B7B',
  textColor4: '#344648',
  borderColor:'#979797',
  background3:'#63cccd',
  red:'#EB5757',
  borderColor1:'#949494',
  borderColor2:'#8A8A8F',
};
const light: Palette = {
  background: '#FFF',
  borderColor:'#979797',
  background1:'#F2F2F2',
  buttonColor1: '#374647',
  textColor1: '#FFFFFF',
  headingColor1: '#4F5164',
  subHeadingColor1: '#277777',
  descriptionColor1: '#545454',
  primaryColor: '#36474A',
  textColor2: '#000000',
  texttColor3: '#787B7B',
  textColor4:'#344648',
  background3:'#63cccd',
  red:'#EB5757',
  borderColor1:'#949494',
  borderColor2:'#8A8A8F',
};
export function useColors(): Palette {
  const theme = useTheme();
  const isDarkMode = theme.dark;
  return isDarkMode ? dark : light;
}
