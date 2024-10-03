import React from 'react';
import {IThemeColor} from '../../configs/colors.config';

export type IThemeName = 'light' | 'dark';

export type IButtonThemeColors =
  | 'textColor'
  | 'backgroundColor'
  | 'textColorDisabled'
  | 'backgroundColorDisabled'
  | 'activeColor'
  | 'spinnerColor'
  | 'spinnerColorDisabled'
  | 'borderColor'
  | 'borderColorDisabled';

export interface IThemeContext {
  changeTheme: (name: IThemeName) => void;
  currentTheme: IThemeName;
  themeColors: Record<IThemeColor, string>;
  themePixels?: {
    bottomSpace: number;
    tabBarSpace: number;
    headerHeight: number;
    /**
     * @deprecated use tabBarSpace
     */
    tabBar: {
      space: number;
    };
  };
}

export type IThemeProviderProps = React.FC<{
  children?: React.ReactNode;
}>;

export interface IThemeSwitchWaitProps {
  backgroundColor: string;
  textColor: string;
}

export interface ICustomThemeColors {
  light: Record<string, string>;
  dark: Record<string, string>;
}

export interface IThemeHookResult extends IThemeContext {
  customColors: Record<string, string>;
}
