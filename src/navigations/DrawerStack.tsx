import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Reservations from '../screens/Reservations/Reservations';
import MainStack from './MainStack';
import Settings from '../screens/Settings/settings';
import Help from '../screens/Help/Help';
import { Text} from 'react-native';
import { HelpIcon, HomeIcon, ReservationsIcon, SettingsIcon } from '../components/Icons/Icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

// const DrawerStack = function DrawerStack() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: {
//           //backgroundColor: '#242729',
//         },
//       }}>
//       <Drawer.Screen name="Home" component={MainStack} />
//       <Drawer.Screen name="Reservations" component={Reservations} />
//       <Drawer.Screen name="Settings" component={Settings} />
//       <Drawer.Screen name="Help" component={Help}/>
//     </Drawer.Navigator>
//   );
// };

const CustomDrawerNavigator = function CustomDrawerNavigator(){

  return (
  <Drawer.Navigator
    initialRouteName ="Home"
    screenOptions={{headerStyle:{
    backgroundColor: 'black'},
    headerTintColor: 'white',
    headerTitleStyle: {fontWeight: 'bold'},
    headerShadowVisible: true,
    drawerStyle: {
      backgroundColor: 'black',
    },
    drawerActiveTintColor: '#40E2FF',
    drawerInactiveTintColor: 'white',
    drawerLabelStyle: {
      color: 'white',
    }
    }}
  // eslint-disable-next-line react/no-unstable-nested-components
    drawerContent={props => (
    <DrawerContentScrollView {...props}>
        <Text> Hello</Text>
        <DrawerItem labelStyle={{color: 'white'}} label={'Home'} onPress={() => {props.navigation.navigate('Home');}} icon={ ({focused}) => (<HomeIcon size={20} color={focused ? '#0d2d33' : '#40e2ff' }/>)}/>
        <DrawerItem labelStyle={{color: 'white'}} label={'Reservations'} onPress={() => {props.navigation.navigate('Reservations');}}  icon={({focused}) => (<ReservationsIcon size={20} color={focused ? '#0d2d33' : '#40e2ff' }/>)}/>
        <DrawerItem labelStyle={{color: 'white'}} label={'Settings'} onPress={() => {props.navigation.navigate('Settings');}} icon={({focused}) => (<SettingsIcon size={20} color={focused ? '#0d2d33' : '#40e2ff'  }/>)}/>
        <DrawerItem labelStyle={{color: 'white'}} label={'Help'} onPress={() => {props.navigation.navigate('Help');}} icon={({focused}) => (<HelpIcon size={20} color={focused ? '#0d2d33' : '#40e2ff'  }/>)}/>
    </DrawerContentScrollView>
  )}>
    <Drawer.Screen name="Home" component={MainStack} options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'TabStack';
          if (routeName === 'Movie'){
            return ({swipeEnabled: false , headerShown: true});
          }
          else {
            return({headerShown: true, swipeEnabled: true});
          }
    }}  />
    <Drawer.Screen name="Reservations" component={Reservations} />
    <Drawer.Screen name="Settings" component={Settings} />
    <Drawer.Screen name="Help" component={Help}/>

    </Drawer.Navigator>);
};

export default CustomDrawerNavigator;
