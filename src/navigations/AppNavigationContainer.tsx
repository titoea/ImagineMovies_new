import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import OnboardingStack from './OnboardingStack';
import AuthStack from './AuthStack';
import {useAuth} from '../providers/AuthProvider/AuthContext';

const myTheme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, background: 'black'},
};

const AppNavigationContainer = function AppNavigationContainer() {
  const {authSessionId} = useAuth();
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={myTheme}>
        <OnboardingStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigationContainer;
