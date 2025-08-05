import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import Account from '../screens/Account/Account';
import {AccountIcon, HomeIcon, SearchIcon, TicketsIcon} from '../components/Icons/Icons';
import TicketList from '../screens/TicketList/TicketList';

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
          } else if (route.name==='Tickets'){
            return focused ? <TicketsIcon color={'#40E2FF'} size={20}/> : <TicketsIcon color={'white'}  size={20}/>;
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
      <Tab.Screen name="Tickets" component={TicketList} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default TabStack;
