import React from 'react';
import { Text, StyleSheet, Image, View, ImageSourcePropType } from 'react-native';

interface Props {
    title: string;
    imageSource: ImageSourcePropType;
}

const ImageDetail = (props: Props) => {
    return (
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default ImageDetail;