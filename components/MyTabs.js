import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Usuarios from '../screens/Usuarios';
import CriarPost from '../screens/NewPost';
import MeusAlbuns from '../screens/Galerias'; // Ajuste para a pasta correta
import Icon from 'react-native-vector-icons/Ionicons'; // Certifique-se que o Ionicons está instalado

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarActiveTintColor: '#3b82f6', // Cor para a aba ativa
        tabBarInactiveTintColor: '#gray', // Cor para as abas inativas
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CriarPost"
        component={CriarPost}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="create-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Usuários"
        component={Usuarios}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Álbuns"
        component={MeusAlbuns}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="images" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
