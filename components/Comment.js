import { View, Text, StyleSheet } from 'react-native'




export default function Comentario({ comment }) {
    return (
        <View style={styles.postContainer}>
            <Text style={styles.email}>{post.email}</Text>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.body}>{post.body}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#007BFF',
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    errorText: {
      fontSize: 18,
      color: '#e74c3c',
      textAlign: 'center',
    },
  });
  