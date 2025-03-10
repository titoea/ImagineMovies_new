import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStack from './TabStack';
import Movie from '../screens/Movie/movie';
import { IMainStackParamsList } from './interfaces';

const Stack = createNativeStackNavigator<IMainStackParamsList>();

const MainStack = function MainStack() {
  return (
    <Stack.Navigator initialRouteName="TabStack" screenOptions={{}}>
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Movie" component={Movie} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default MainStack;
