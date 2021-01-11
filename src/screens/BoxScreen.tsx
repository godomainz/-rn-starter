import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = (props:any) => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        alignItems: "flex-start"
    },
    textStyle:{
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;