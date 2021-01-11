import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT:number = 15;

const SquareScreen = () => {
    const [red, setRed] = useState<number>(0);
    const [green, setGreen] = useState<number>(0);
    const [blue, setBlue] = useState<number>(0);

    return (
        <View>
            <ColorCounter onIncrease={()=>{setRed( red + COLOR_INCREMENT )}} onDecrease={()=>{setRed( red - COLOR_INCREMENT )}} color="Red"/>
            <ColorCounter onIncrease={()=>{setGreen( green + COLOR_INCREMENT )}} onDecrease={()=>{setGreen( green - COLOR_INCREMENT )}} color="Green"/>
            <ColorCounter onIncrease={()=>{setBlue( blue + COLOR_INCREMENT )}}  onDecrease={()=>{setBlue( blue - COLOR_INCREMENT )}} color="Blue"/>
            <View style={{height:150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareScreen;