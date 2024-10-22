import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Perfil from "../components/Perfil";
import { Usuarios } from "../moks/Usuarios";
import { Postagens } from '../moks/Postagens';
import Postagem from '../components/Publicacao';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={Postagens}
      renderItem={({ item }) => {
        const user = Usuarios.find(usuario => usuario.id === item.userId); 
        return <Postagem post={item} user={user} />;
      }}
      keyExtractor={item => item.id.toString()} 
    />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
