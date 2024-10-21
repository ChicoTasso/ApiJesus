import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Postagem({ post, user }) {
    return (
        <TouchableOpacity style={styles.button}>
            <View style={styles.container}>
                <Text style={styles.username}><Image style={{ width: 50, height: 50, borderRadius: '50%', }} source={{ uri: 'https://i.pinimg.com/control/564x/c4/60/44/c4604431e803b2a19abab09d1e57fea7.jpg' }} />  {user.name}  @{user.username}</Text>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.body}>{post.body}</Text>                
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
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
    username: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#555',
        marginBottom: 5,
        justifyContent: 'center',
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
    // button: {
    //     backgroundColor: '#007BFF',
    //     paddingVertical: 10,
    //     paddingHorizontal: 15,
    //     borderRadius: 5,
    //     alignItems: 'center',
    // },
    // buttonText: {
    //     color: '#fff',
    //     fontWeight: 'bold',
    // },
});
