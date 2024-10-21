import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Perfil({ user }) {
  if (!user) {
    return <Text style={styles.error}>Nenhum usuário encontrado.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.username}>@{user.username}</Text>
      <Text style={styles.email}>{user.email}</Text>
      
      <View style={styles.addressContainer}>
        <Text style={styles.subTitle}>Endereço:</Text>
        <Text>{user.address.suite}, {user.address.street}</Text>
        <Text>{user.address.city}, {user.address.zipcode}</Text>
        <Text>Latitude: {user.address.geo.lat}, Longitude: {user.address.geo.lng}</Text>
      </View>
      
      <Text style={styles.phone}>Telefone: {user.phone}</Text>
      <Text style={styles.website}>Website: {user.website}</Text>
      
      <View style={styles.companyContainer}>
        <Text style={styles.subTitle}>Empresa:</Text>
        <Text>{user.company.name}</Text>
        <Text>{user.company.catchPhrase}</Text>
        <Text>{user.company.bs}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 18,
    color: '#555',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  addressContainer: {
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  phone: {
    fontSize: 16,
    marginTop: 10,
  },
  website: {
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  },
  companyContainer: {
    marginTop: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
