import { useState } from "react";
import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { Card, Text } from "react-native-paper";
import Usuarios from "../data/Usuarios";

const getUsuarioPorId = (id) => {
    return Usuarios.find(p => p.id == id)
}

export default ({ route, navigation }) => {
    const [usuario, setUsuario] = useState(getUsuarioPorId(route.params.id))

    return (
        <SafeAreaView style={styles.container}>
            <Card style={styles.card}>
                <Card.Cover
                    source={{ uri: usuario.imagem }}
                    style={styles.image}
                />
                <Card.Content style={styles.content}>
                    <Text variant="headlineLarge" style={styles.title}>{usuario.nome}</Text>
                    <Text variant="bodyLarge" style={styles.email}>{usuario.email}</Text>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    card: {
        width: '100%',
        maxWidth: 400,
        borderRadius: 12,
        elevation: 4,
    },
    image: {
        height: Dimensions.get('window').width * 1.2, 
        objectFit: 'contain'
    },
    content: {
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
    },
    email: {
        fontSize: 18,
        color: '#555',
    },
});