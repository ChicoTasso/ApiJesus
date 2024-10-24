import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function UpdatePost({ navigation, route }) {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const { postId } = route.params;


 useEffect( ()=> {
    const recuperarDados = async () =>  {
      try {
        setLoading(true);
        const batata = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const batataDados = await batata.json();
        setTitulo(batataDados.title);
        setTexto(batataDados.body);
      } catch (error) {
        console.error('Erro ao buscar post.', error)
      } finally {
        setLoading(false);
      }
    }
    recuperarDados();
  }, [postId]); 


  const updatePost = () => {
    setLoading(true);
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        body: body
      })
    })
    .then(response => response.json())
    .then(data => {
      alert('Post atualizado com sucesso!');
      setLoading(false);
      navigation.navigate('Posts'); 
    })
    .catch(error => {
      console.error(error);
      setLoading(false);
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
          onPress={updatePost}
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
