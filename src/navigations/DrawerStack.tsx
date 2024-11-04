import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Reservations from '../screens/Reservations/Reservations';
import MainStack from './MainStack';
import Settings from '../screens/Settings/settings';
import Help from '../screens/Help/Help';
import { Text} from 'react-native';
import { HomeIcon, ReservationsIcon } from '../components/Icons/Icons';

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
  // eslint-disable-next-line react/no-unstable-nested-components
    drawerContent={props => (
    <DrawerContentScrollView {...props}>
        <Text> Hello</Text>
        <DrawerItem label={'Home'} onPress={() => {props.navigation.navigate('Home');}} icon={ ({focused}) => (<HomeIcon/>)}/>
        <DrawerItem label={'Reservations'} onPress={() => {props.navigation.navigate('Reservations');}} /* icon={({focused}) => (<ReservationsIcon size={20} color={focused ? '#0d2d33' : '#40e2ff' }/>)} *//>
        <DrawerItem label={'Settings'} onPress={() => {props.navigation.navigate('Settings');}}/>
        <DrawerItem label={'Help'} onPress={() => {props.navigation.navigate('Help');}}/>
    </DrawerContentScrollView>
  )}>
    <Drawer.Screen name="Home" component={MainStack} />
    <Drawer.Screen name="Reservations" component={Reservations} />
    <Drawer.Screen name="Settings" component={Settings} />
    <Drawer.Screen name="Help" component={Help}/>

    </Drawer.Navigator>);
};

export default CustomDrawerNavigator;
