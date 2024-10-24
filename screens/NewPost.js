import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';

export default function CriarPost({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');

  const publicarPost = () => {
    if (!titulo || !texto) {
      Alert.alert('Erro', 'Título e conteúdo não podem estar vazios.');
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titulo, 
        body: texto,  
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        Alert.alert('Sucesso', 'Post publicado com sucesso!');
        navigation.goBack(); 
      })
      .catch(error => {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar publicar o post.');
        console.error('Erro ao publicar post:', error);
      });
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
          onPress={publicarPost}
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
    backgroundColor: '#007BFF', 
    borderRadius: 5,
    overflow: 'hidden',
  },

});
