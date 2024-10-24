import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import PostDetail from './components/DetalharPost';
import MyTabs from './components/MyTabs';
import CriarPost from './screens/NewPost';
import Usuarios from './screens/Usuarios'
import MeusAlbuns from './screens/Galerias';
import PerfilDoUsuario from './screens/ExibirPerfil';
import UpdatePost from './screens/UpdatePost';
import AtualizandoTitulo from './screens/UpdatePartial';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Posts">
        <Stack.Screen options={{ headerShown: false }} name="Posts" component={MyTabs} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="New Post" component={CriarPost}  />
        <Stack.Screen name="Perfis" component={Usuarios}  />
        <Stack.Screen name="Albuns" component={MeusAlbuns}  />
        <Stack.Screen name="PerfilDoUsuario" component={PerfilDoUsuario}  />
        <Stack.Screen name="UpdatePost" component={UpdatePost}  />
        <Stack.Screen name="Atualizando Título" component={AtualizandoTitulo}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 



