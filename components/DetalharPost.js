import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function PostDetail({ route }) {
  const { post, user } = route.params;

  if (!post || !user) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Erro ao carregar os detalhes do post.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
      <View style={styles.userInfo}>
      <Image
            style={styles.avatar}
            source={{ uri: 'https://i.pinimg.com/control/564x/c4/60/44/c4604431e803b2a19abab09d1e57fea7.jpg' }}
          />
      <Text style={styles.username}>
        {user.name ? user.name : 'Usuário Desconhecido'} @{user.username ? user.username : 'username_indisponível'}
      </Text>
      </View>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      </View>
      <Text style={{ fontSize:24, fontWeight: 'bold',}}> Comentários:</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007BFF',
    
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#34495e',
  },
  body: {
    fontSize: 16,
    color: '#7f8c8d',
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
  postContainer:{
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
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
