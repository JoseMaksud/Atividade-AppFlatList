import React from 'react';

import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
} from 'react-native';

import {
    List
} from 'react-native-paper';

import Usuarios from '../data/Usuarios'

export default props => {
    const Item = ({ elemento: item }) => {
        return (
            <List.Item
                title={item.nome}
                description={item.email}
                left={props =>
                    <Image {...props}
                        style={styles.tinyLogo}
                        source={
                            {
                                uri: item.imagem
                            }
                        } />}
                onPress={() => props.navigation.navigate("DetalheUsuario", {id: item.id})}
            />
        )
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={Usuarios}
                renderItem={({ item }) => <Item elemento={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9f9f9',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        elevation: 2,
        padding: 16,
    },
    title: {
        fontSize: 32,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
});
