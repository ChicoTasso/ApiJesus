import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Postagem({ post, user }) {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{user.name}</Text> 
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Leia mais</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  username: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555', 
    marginBottom: 5,
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
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
