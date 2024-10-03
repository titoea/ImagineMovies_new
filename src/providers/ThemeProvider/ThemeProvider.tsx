import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  DarkThemeColors,
  IThemeColor,
  LightThemeColors,
} from '../../configs/colors.config';
import {
  FIXED_BOTTOM_SPACE,
  HEADER_HEIGHT,
  TAB_BAR_BOTTOM_SPACE,
  TAB_BAR_HEIGHT,
} from '../../configs/theme.config';
import {asyncGet, asyncStore} from '../../utils/AsyncStorage.util';
import ChangeAndroidNavColor from '../../utils/ChangeAndroidNavColor.util';
import Sleep from '../../utils/Sleep.util';
import {
  IThemeName,
  IThemeProviderProps,
  IThemeSwitchWaitProps,
} from './interfaces';
import ThemeContext from './ThemeContext';

/**
 * This component serves as the theme provider and sets the interface for
 * switching and getting the selected theme.
 * @returns React.ReactElement
 */
const ThemeProvider: IThemeProviderProps = function ThemProvider({children}) {
  const [theme, setTheme] = useState<IThemeName>('light');
  const [isPending, setIsPending] = useState<boolean>(true);
  const [colors, setColors] =
    useState<Record<IThemeColor, string>>(DarkThemeColors);
  const safeInsets = useSafeAreaInsets();

  const bottomSpace = useMemo(() => {
    if (safeInsets.bottom > FIXED_BOTTOM_SPACE) {
      return safeInsets.bottom;
    }
    return FIXED_BOTTOM_SPACE;
  }, [safeInsets.bottom]);

  const themePixels = useMemo(
    () => ({
      bottomSpace,
      tabBarSpace: TAB_BAR_HEIGHT + TAB_BAR_BOTTOM_SPACE,
      headerHeight: HEADER_HEIGHT + safeInsets.top,
      tabBar: {
        space: TAB_BAR_HEIGHT + TAB_BAR_BOTTOM_SPACE,
      },
    }),
    [bottomSpace, safeInsets.top],
  );

  /**
   * This method is used to change the current theme being used within the
   * mobile app.
   * @param {IThemeName} name
   */
  const changeTheme = useCallback(async function changeTheme(name: IThemeName) {
    // toggle pending mode on
    setIsPending(true);
    // persist new them
    await asyncStore(STORE_KEYS.THEME, name);
    // update theme in state
    await Sleep(1500);
    // set theme colors
    setColors(name === 'light' ? LightThemeColors : DarkThemeColors);
    // set current theme
    setTheme(name);
    // toggle pending mode off
    setIsPending(false);
  }, []);

  /**
   * This method is used to set the initial theme, this will get the selected
   * theme from the async store.
   */
  const setInitialTheme = useCallback(
    async function setInitialTheme() {
      const persistedTheme = await asyncGet<IThemeName>(STORE_KEYS.THEME);
      // no need to select theme if alternate theme is not set
      if (persistedTheme !== 'light') {
        // change android navigation bar color
        ChangeAndroidNavColor(DarkThemeColors.background, false);
        // toggle pending mode off and load application
        return setIsPending(false);
      }
      // change android navigation bar color
      ChangeAndroidNavColor(LightThemeColors.background, true);
      // change theme to the persisted theme
      changeTheme(persistedTheme);
    },
    [changeTheme],
  );

  // handle component did mount
  useEffect(() => {
    setInitialTheme();
    // handle component will unmount
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render the app
  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        changeTheme: changeTheme,
        themeColors: colors,
        themePixels,
      }}>
      {!isPending ? (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
          <StatusBar
            barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
            backgroundColor={colors.background}
          />
          {children}
        </View>
      ) : (
        <ThemeSwitchWait
          backgroundColor={colors.background}
          textColor={colors.text}
        />
      )}
    </ThemeContext.Provider>
  );
};

/**
 * This component replaces the app and is show to the user while the
 * application theme is being selected.
 * @param {IThemeSwitchWaitProps} props
 * @returns React.ReactElement
 */
const ThemeSwitchWait: React.FC<IThemeSwitchWaitProps> =
  function ThemeSwitchWait({backgroundColor}) {
    return (
      <View style={[styles.switchWaitContainer, {backgroundColor}]}>
        <Spinner />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchWaitText: {
    marginVertical: 20,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
  switchWaitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

// export ThemeProvider component as the default module
export default ThemeProvider;
