import React from 'react';
import { Text, StyleSheet, Image, View, ImageSourcePropType } from 'react-native';

interface Props {
    title: string;
    imageSource: ImageSourcePropType;
    score: number;
}

const ImageDetail = ({ title, imageSource, score}: Props) => {
    return (
        <View>
            <Image source={imageSource}/>
            <Text>{title}</Text>
            <Text>Image Scrore - {score}</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default ImageDetail;