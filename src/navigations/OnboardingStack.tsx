import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '../screens/Landing/Landing';
import SignUp from '../screens/SignUp/SignUp';
import LogIn from '../screens/LogIn/LogIn';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const OnboardingStack = function OnboardingStack() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{header: () => null}}>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{header: () => null}}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Auth" component={AuthStack}/>
    </Stack.Navigator>
  );
};

export default OnboardingStack;
