import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = ({title, imgSource, score}) => {

    return (
        <View style={styles.container}>
            <Image source={imgSource} />
            <Text  >{title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
        margin: 2
    }
});

export default ImageDetail;