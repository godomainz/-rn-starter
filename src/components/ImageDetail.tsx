import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface Props {
    title: string;
}

const ImageDetail = (props:Props) => {
    return (
        <Text>{props.title}</Text>
    );

}

const styles = StyleSheet.create({});

export default ImageDetail;