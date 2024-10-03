import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Membership from '../screens/Membership/Membership';
import Refreshment from '../screens/Refreshment/Refreshment';
import Account from '../screens/Account/Account';
import {HamburgerIcon} from '../components/Icons/Icons';

const Tab = createBottomTabNavigator();

const TabStack = function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        // headerLeft: () => {
        //   return <HamburgerIcon color="#DCDCDC" size={16} />;
        // },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Membership" component={Membership} />
      <Tab.Screen name="Refreshment" component={Refreshment} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default TabStack;
