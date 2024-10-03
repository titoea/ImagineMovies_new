import {DefaultTheme, DarkTheme as RNDarkTheme} from '@react-navigation/native';
export type IThemeColor = 'primary' | 'background' | 'text' | 'card';

export const LightThemeColors: Record<IThemeColor, string> = {
  ...DefaultTheme.colors,
  text: '#DCDCDC',
  background: '#242729',
  primary: '#D9C14A',
  card: '#242729',
};

export const DarkThemeColors: Record<IThemeColor, string> = {
  ...RNDarkTheme.colors,
  ...LightThemeColors,
};

export const DefaultThemeColors = {...LightThemeColors};
