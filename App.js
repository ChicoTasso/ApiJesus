import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Perfil from "./components/Perfil";
import { Usuarios } from "./moks/Usuarios";
import { Postagens } from './moks/Postagens';
import Postagem from './components/Publicacao';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Postagens}
        renderItem={({ item }) => <Postagem post={item} />}
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
