import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import PostDetail from './components/DetalharPost';
import MyTabs from './components/MyTabs';
import CriarPost from './screens/NewPost';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Posts">
        <Stack.Screen options={{ headerShown: false }} name="Posts" component={MyTabs} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="New Post" component={CriarPost}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 