import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
const ComponentScreen = () => {
    const greeting = <Text>Bye there</Text>;
    return(
        <View>
            <Text style={styles.textStyle}>This is component screen</Text>
            {greeting}
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentScreen;