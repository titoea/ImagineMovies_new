import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStack from './TabStack';
import Movie from '../screens/Movie/movie';
import { IMainStackParamsList } from './interfaces';
import MoviePreview from '../screens/MoviePreview/MoviePreview';
import SeatBooking from '../screens/Seat/SeatBooking';
import Ticket from '../screens/Ticket/Ticket';

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
      <Stack.Screen name="MoviePreview" component={MoviePreview} options={{headerShown: false}}/>
      <Stack.Screen name="SeatBooking" component={SeatBooking} options={{headerShown: false}}/>
      <Stack.Screen name="Ticket" component={Ticket} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default MainStack;
