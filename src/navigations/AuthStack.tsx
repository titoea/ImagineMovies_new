import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStack from './TabStack';
import DrawerStack from './DrawerStack';
import CustomDrawerNavigator from './DrawerStack';

const Stack = createNativeStackNavigator();

const AuthStack = function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="CustomDrawerNavigator" screenOptions={{}}>
      <Stack.Screen
        name="CustomDrawerNavigator"
        component={CustomDrawerNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
