import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 20},
        {name: 'Friend #2', age: 30},
        {name: 'Friend #3', age: 43},
        {name: 'Friend #4', age: 18},
        {name: 'Friend #5', age: 21},
        {name: 'Friend #6', age: 22},
        {name: 'Friend #7', age: 35},
        {name: 'Friend #8', age: 28},
        {name: 'Friend #9', age: 76},
        {name: 'Friend #10', age: 52}
    ];

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.name}
                data={friends}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.listItem}>{item.name}</Text>
                            <Text style={styles.ageText}>Age {item.age}</Text>
                        </View>
                    )}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    ageText: {
        margin: 5
    },
    listItem: {
        marginVertical: 50,
        marginHorizontal: 20
    },
    container: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1
    },
    card: {
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        margin: 3
    }
});

export default ListScreen;