import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Tomas Kelecius';

    return (
        <View>
            <Text style={styles.text}>This is a Components screen</Text>
            <Text style={styles.subtitle}>Hello, my name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    subtitle: {
        fontSize: 15
    }
});

export default ComponentsScreen;