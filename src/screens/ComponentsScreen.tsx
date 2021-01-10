import React from 'react';
import { Text, StyleSheet } from 'react-native';
const ComponentScreen = (props:any) => {

    return(
        <Text style={styles.textStyle}>This is component screen</Text>
    );

}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentScreen;