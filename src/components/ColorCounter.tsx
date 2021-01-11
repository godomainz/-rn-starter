import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

interface Props {
    color: string;
}

const SquareCounter = ({color}:Props) => {

    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={()=>{}}/>
            <Button title={`Decrease ${color}`} onPress={()=>{}}/>
        </View>
    );

}

const styles = StyleSheet.create({});

export default SquareCounter;