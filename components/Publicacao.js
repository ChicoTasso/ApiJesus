import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import apagarPost from '../screens/DeletePost'

export default function Postagem({ post, navigation }) {
  const handlePress = () => {
    navigation.navigate('PostDetail', { postId: post.id }); 
  };


  const atualizarPost = () => {
    navigation.navigate('UpdatePost', { postId: post.id })
  }

  const apagarPost = () => {
    navigation.navigate('DeletePost', {postId: post.id })
  }


  const atualizarTitulo = () => {
    navigation.navigate('AtualizandoTítulo', {postId: post.id })
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>
        <View style={styles.buttonGroups}>
          <TouchableOpacity onPress={atualizarPost} ><FontAwesome5 name="edit" size={24} color="#007BFF" /></TouchableOpacity>
          <TouchableOpacity onPress={atualizarTitulo} ><FontAwesome5 name="edit" size={24} color="#007BFF" /></TouchableOpacity>
          <TouchableOpacity onPress={apagarPost} style={styles.icons}><Ionicons name="trash" size={24} color="#007BFF" /></TouchableOpacity>
        </View>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    
  },
  button: {
    width: '100%', 
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  body: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  }, 
  buttonGroups: {
    flexDirection: 'row',
  },
  icons:{
    paddingHorizontal: 8,
  }
});
