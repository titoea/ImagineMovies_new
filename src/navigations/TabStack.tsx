import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import Refreshment from '../screens/Refreshment/Refreshment';
import Account from '../screens/Account/Account';
import {AccountIcon, HomeIcon, SearchIcon, RefreshmentIcon} from '../components/Icons/Icons';

const Tab = createBottomTabNavigator();

const TabStack = function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route} )=> ({
        tabBarIcon: ({focused, color, size}) =>{
          if (route.name === 'Home'){
            return focused ? <HomeIcon color={'#40E2FF'} size={20}/> : <HomeIcon color={'white'}  size={20}/>;
          } else if (route.name === 'Search'){
            return focused ? <SearchIcon color={'#40E2FF'} size={20}/> : <SearchIcon color={'white'}  size={20}/>;
          } else if (route.name==='Refreshment'){
            return focused ? <RefreshmentIcon color={'#40E2FF'} size={20}/> : <RefreshmentIcon color={'white'}  size={20}/>;
          } else if (route.name=== 'Account'){
            return focused ? <AccountIcon color={'#40E2FF'} size={20} /> : <AccountIcon color={'white'}  size={20} />
          }
        },
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: '#40E2FF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
        //headerShown: false,
        // headerLeft: () => {
        //   return <HamburgerIcon color="#DCDCDC" size={16} />;
        // },
        >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Refreshment" component={Refreshment} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default TabStack;
