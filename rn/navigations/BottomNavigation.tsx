import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View } from 'react-native';

import Home from '../screens/home';
import Search from '../screens/search';
import Dot from '../components/Dot';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {

  const getTabBarIcon = (screen: string, focused: boolean) => {
    let iconComponent;

    switch (screen) {
      case 'Home':
        iconComponent = <Feather name='home' size={24} color={'#ffffff'} />;
        break;
      case 'Search':
        iconComponent = <Feather name='search' size={24} color={'#ffffff'} />;
        break;
      case 'Notifications':
        iconComponent = <Feather name='bell' size={24} color={'#ffffff'} />;
        break;
      case 'Mic':
        iconComponent = <Feather name='mic' size={24} color={'#ffffff'} />;
        break;
      case 'Messages':
        iconComponent = <Ionicons name='chatbubble-ellipses-outline' size={24} color={'#ffffff'} />;
        break;
      case 'Wallet':
        iconComponent = <AntDesign name='wallet' size={24} color={'#ffffff'} />;
        break;
      default:
        iconComponent = null;
    }

    return (
      <View style={{ opacity: focused ? 1 : 0.6, alignItems: 'center' }}>
        {iconComponent}
        {focused && <Dot />}
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIconStyle: { opacity: 0.8 },
        tabBarStyle: { backgroundColor: "#020202", height: 60, paddingTop: 10 },
        tabBarLabelStyle: { color: '#ffffff' },
        tabBarLabelPosition: 'below-icon'
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ focused }) => getTabBarIcon('Home', focused) }} />
      <Tab.Screen name="Search" component={Search} options={{ tabBarIcon: ({ focused }) => getTabBarIcon('Search', focused) }} />
      <Tab.Screen name="Notifications" component={Search} options={{ tabBarIcon: ({ focused }) => getTabBarIcon('Notifications', focused) }} />
      <Tab.Screen name="Mic" component={Search} options={{ tabBarIcon: ({ focused }) => getTabBarIcon('Mic', focused) }} />
      <Tab.Screen name="Messages" component={Search} options={{ tabBarIcon: ({ focused }) => getTabBarIcon('Messages', focused) }} />
      <Tab.Screen name="Wallet" component={Search} options={{ tabBarIcon: ({ focused }) => getTabBarIcon('Wallet', focused) }} />
    </Tab.Navigator>
  )
}

export default BottomNavigation;