import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStack from './TabStack';

const Stack = createNativeStackNavigator();

const MainStack = function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="TabStack" screenOptions={{}}>
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
