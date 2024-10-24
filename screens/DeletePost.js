import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function ApagarPost({ navigation, route }) {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const { postId } = route.params;


 useEffect( ()=> {
    const recuperarDados = async () =>  {
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const dataDados = await data.json();
        setTitulo(dataDados.title);
        setTexto(dataDados.body);
      } catch (error) {
        console.error('Erro ao buscar post.', error)
      }
    }
    recuperarDados();
  }, [postId]); 


  const apagarPost = () => {
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      alert('Post deletado com sucesso!');
    navigation.navigate('Posts');
    })
    .catch(error => {
      console.error(error);
    });
  };
  



  return (
    <View style={styles.container}>
        <Button
          title="Apagar"
          onPress={apagarPost}
          color="#000" 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
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
