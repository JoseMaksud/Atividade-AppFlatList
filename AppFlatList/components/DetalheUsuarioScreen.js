import { useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import Usuarios from "../data/Usuarios";

const getUsuarioPorId = (id) => {
    return Usuarios.find(p => p.id == id)
}

export default ({ route, navigation }) => {
    const [produto, setProduto] = useState(getProdutoPorId(route.params.id))

    return (
        <View>
            <Card>
                <Card.Cover source={{
                    uri: produto.urlImagem
                }} />
                <Card.Title title={produto.titulo} />
                <Card.Content>
                    <Text variant="bodyMedium">{produto.descricao}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}