import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStack from './TabStack';
import DrawerStack from './DrawerStack';

const Stack = createNativeStackNavigator();

const AuthStack = function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="DrawerStack" screenOptions={{}}>
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
