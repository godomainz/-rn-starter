import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = (props:any) => {

    return (
        <View>
            <ImageDetail />
            <ImageDetail />
            <ImageDetail />
        </View>
    );

}

const styles = StyleSheet.create({});

export default ImageScreen;