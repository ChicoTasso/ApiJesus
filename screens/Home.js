import React, { useState, useEffect } from 'react';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Usuarios } from "../moks/Usuarios";
import Postagem from '../components/Publicacao';

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]); // Correção aqui: setPosts com "s" minúsculo

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(data => setPosts(data)) // Atualização do estado correto
      .catch(error => {
        console.error('Erro ao buscar posts:', error); // Adicionando tratamento de erro
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          const user = Usuarios.find(usuario => usuario.id === item.userId);
          return (
            <Postagem
              post={item}
              user={user}
              navigation={navigation}
            />
          );
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
