import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Perfil({ user }) {
  if (!user) {
    return <Text style={styles.error}>Nenhum usuário encontrado.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.username}>@{user.username}</Text>
      
      <View style={styles.infoContainer}>
        <MaterialCommunityIcons name="email" size={20} color="#555" />
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <MaterialCommunityIcons name="phone" size={20} color="#555" />
        <Text style={styles.phone}>Telefone: {user.phone}</Text>
      </View>

      <View style={styles.infoContainer}>
        <MaterialCommunityIcons name="web" size={20} color="#555" />
        <Text style={styles.website}>Website: {user.website}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    shadowColor: '#000',
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  username: {
    fontSize: 20,
    color: '#777',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
  phone: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
  website: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
