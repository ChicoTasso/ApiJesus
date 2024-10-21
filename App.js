import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Perfil from "./components/Perfil";
import { Usuarios } from "./moks/Usuarios";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Usuarios}
        renderItem={({ item }) => (
          <Perfil user={item} /> // Certifique-se de que `Perfil` aceita o objeto completo
        )}
        keyExtractor={item => item.id.toString()} // Convertendo id para string
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
