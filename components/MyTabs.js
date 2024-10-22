import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Usuarios from '../screens/Usuarios';
import CriarPost from '../screens/NewPost';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="NewPost" component={CriarPost} />
          <Tab.Screen name="Profile" component={Usuarios} />
        </Tab.Navigator>

    );
  }