import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';

export default function UpdatePost({ navigation, route }) {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const { postId } = route.params;


  const RecuperarPost = () => {
    
  }



  const UpdatePost = () => {
    if (titulo === '' || texto === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    Alert.alert('Sucesso', 'Post publicado com sucesso!');
    
    navigation.navigate('Posts');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Título do Post"
        placeholderTextColor="#000" 
        value={titulo}
        onChangeText={setTitulo}
      />
      <Text style={styles.label}>Conteúdo</Text> 
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Escreva o conteúdo do post aqui..."
        placeholderTextColor="#000" 
        value={texto}
        onChangeText={setTexto}
        multiline
        numberOfLines={4}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Publicar"
          onPress={UpdatePost}
          color="#000" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007BFF',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', 
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFF', 
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 18,
    color: '#000', 
    backgroundColor: '#FFF', 
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    backgroundColor: '#0056b3', 
    borderRadius: 5,
    overflow: 'hidden',
  },
});
