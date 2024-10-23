import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Perfil from '../components/Perfil';
import { Usuarios as usuariosData } from '../moks/Usuarios';

export default function Usuarios() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={usuariosData}
        renderItem={({ item }) => <Perfil user={item} />} // Passando o objeto do usuário
        keyExtractor={item => item.id.toString()} // Convertendo o ID para string
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#007BFF',
  },
});