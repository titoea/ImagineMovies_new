import React from 'react';
import {DarkThemeColors} from '../../configs/colors.config';
import {
  ICustomThemeColors,
  IThemeContext,
  IThemeHookResult,
} from './interfaces';

/**
 * This serves as the appearance them context across the entire application.
 * @var React.Context<IThemeContext>
 */
const ThemeContext = React.createContext<IThemeContext>({
  currentTheme: 'light',
  changeTheme: () => {},
  themeColors: DarkThemeColors,
});

/**
 * This hook is used to connect to the react theme context.
 * @returns IThemeContext
 */
export function useTheme(
  customThemeColors?: ICustomThemeColors,
): IThemeHookResult {
  // get the theme's context
  const theme = React.useContext(ThemeContext);
  // handle check for when the them is not available
  React.useEffect(() => {
    if (!theme) {
      console.error(
        'It is not allowed to use the theme context outside the theme provider.',
      );
    }
  }, [theme]);
  // return the theme
  return {
    ...theme,
    customColors:
      customThemeColors && customThemeColors[theme.currentTheme]
        ? customThemeColors[theme.currentTheme]
        : {},
  };
}

// export ThemeContext at the default module
export default ThemeContext;
