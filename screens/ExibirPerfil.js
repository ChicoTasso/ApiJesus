import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import DetalharUsuario from '../components/DetailUser';

export default function PerfilDoUsuario({ route }) {
    const { userId } = route.params;
    const [perfil, setPerfil] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                const userData = await response.json();
                setPerfil(userData);
            } catch (error) {
                console.error('Erro ao buscar Perfil:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPerfil();
    }, [userId]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Carregando perfil...</Text>
            </View>
        );
    }

    if (!perfil) {
        return (
            <View style={styles.errorContainer}>
                <Text>Erro ao carregar o perfil.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <DetalharUsuario user={perfil} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#007BFF',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
