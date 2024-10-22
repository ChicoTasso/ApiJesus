import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function CriarPost({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');

  const publicarPost = () => {
    if (titulo === '' || texto === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    Alert.alert('Sucesso', 'Post publicado com sucesso!');
    
    navigation.navigate('Posts');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título do Post"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Escreva o conteúdo do post aqui..."
        value={texto}
        onChangeText={setTexto}
        multiline
        numberOfLines={4}
      />
      <Button title="Publicar" onPress={publicarPost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 18,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
