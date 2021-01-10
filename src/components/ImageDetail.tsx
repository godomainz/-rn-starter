import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

interface Props {
    title: string;
}

const ImageDetail = (props:Props) => {
    return (
        <View>
            <Image source={require('../../assets/beach.jpg')}/>
            <Text>{props.title}</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default ImageDetail;