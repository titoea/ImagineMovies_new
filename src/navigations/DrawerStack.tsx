import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import TabStack from './TabStack';
import Reservations from '../screens/Reservations/Reservations';
import MainStack from './MainStack';

const Drawer = createDrawerNavigator();

const DrawerStack = function DrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          //backgroundColor: '#242729',
        },
      }}>
      <Drawer.Screen name="Home" component={MainStack} />
      <Drawer.Screen name="Reservations" component={Reservations} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
