import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PostDetail({ route }) {
  const { post, user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{user.name} @{user.username}</Text>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  body: {
    fontSize: 16,
    color: '#333',
  },
});
