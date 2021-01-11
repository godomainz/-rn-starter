import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

interface Props {
    color: string;
    onIncrease: ()=>void;
    onDecrease: ()=>void;
}

const SquareCounter = ({ color, onIncrease, onDecrease }:Props) => {

    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={()=>onIncrease()}/>
            <Button title={`Decrease ${color}`} onPress={()=>onDecrease()}/>
        </View>
    );

}

const styles = StyleSheet.create({});

export default SquareCounter;