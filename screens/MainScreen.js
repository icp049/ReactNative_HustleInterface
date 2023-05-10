import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ExploreScreen from './Explore';
import ServicesScreen from './Services';
import MessageScreen from './Message';
import AccountScreen from './Account';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          showLabel: false,
          showLabel: route.name !== 'Explore',
          style: {
            backgroundColor: '#ffc125',
            height: 60,
          },
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Explore') {
              iconName = focused ? 'home' : 'home-outline';
              size = focused ? size + 8 : size + 5;
            } else if (route.name === 'Services') {
              iconName = focused ? 'settings' : 'settings-outline';
              size = focused ? size + 8 : size + 5;
            } else if (route.name === 'Message') {
              iconName = focused ? 'mail' : 'mail-outline';
              size = focused ? size + 8 : size + 5;
            } else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
              size = focused ? size + 8 : size + 5;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
