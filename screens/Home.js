import React, { useState, useEffect } from 'react';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Usuarios } from "../moks/Usuarios";
import Postagem from '../components/Publicacao';

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => {
        console.error('Erro ao buscar posts:', error);
        setError('Erro ao carregar os posts.'); 
      });
  }, []);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

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
    backgroundColor: '#007BFF',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#e74c3c',
    textAlign: 'center',
  },
});
