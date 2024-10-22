import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Postagem({ post, user }) {
    const handlePress = () => {
        navigation.navigate('PostDetail', { post, user }); 
      };




  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
      <View style={styles.userInfo}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://i.pinimg.com/control/564x/c4/60/44/c4604431e803b2a19abab09d1e57fea7.jpg' }}
        />
        <Text style={styles.username}>{user.name} @{user.username}</Text>
      </View>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25, // Deixar a imagem circular
    marginRight: 10, // Espaço entre a imagem e o texto
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#555',
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
    width: 443,
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
