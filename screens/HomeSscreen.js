import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = (props) => {
    const { navigate } = props.navigation;

    return (
        <View>
            <Text style={styles.text}>HomeScreen</Text>
            <Button
                title="Go to Components Demo"
                onPress={() => navigate('Components')}
            />
            <Button
                title="Go to Image Demo"
                onPress={() => navigate('Image')}
            />
            <Button
                title="Go to List Demo"
                onPress={() => navigate('List')}
            />
            <Button
                title="Go to Counter"
                onPress={() => navigate('Counter')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
