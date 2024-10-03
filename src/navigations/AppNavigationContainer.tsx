import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import OnboardingStack from './OnboardingStack';
import AuthStack from './AuthStack';
import {useAuth} from '../providers/AuthProvider/AuthContext';
import DrawerStack from './DrawerStack';

const AppNavigationContainer = function AppNavigationContainer() {
  const {authSessionId} = useAuth();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/*<OnboardingStack /> */}
        <AuthStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigationContainer;
