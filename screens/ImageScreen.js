import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

    return (
        <View>
            <ImageDetail 
                score={9}
                title="Forest"
                imgSource={require('../assets/forest.jpg')} />
            <ImageDetail
                score={7}
                title="Beach"
                imgSource={require('../assets/beach.jpg')} />
            <ImageDetail
                score={10}
                title="Mountain"
                imgSource={require('../assets/mountain.jpg')} />
        </View>
    );
};



export default ImageScreen;