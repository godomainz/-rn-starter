import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT:number = 15;

const SquareScreen = () => {
    const [red, setRed] = useState<number>(0);
    const [green, setGreen] = useState<number>(0);
    const [blue, setBlue] = useState<number>(0);

    const setColour = (color:string, change:number) => {
        switch(color){
            case "red":
                ( ( ( red + change ) > 255 ) || ( ( red + change ) < 0 ) ) ? null : setRed( red + change)
                return;
            case "green":
                ( ( ( green + change ) > 255 ) || ( ( green + change ) < 0 ) ) ? null : setGreen( green + change);
                return;
            case "blue":
                ( ( ( blue + change ) > 255 ) || ( ( blue + change ) < 0 ) ) ? null : setBlue( blue + change);
                return;
            default:
                return;
        }
    }
    

    return (
        <View>
            <ColorCounter onIncrease={()=>{setColour("red", COLOR_INCREMENT)}} onDecrease={()=>{setColour("red", -1 * COLOR_INCREMENT)}} color="Red"/>
            <ColorCounter onIncrease={()=>{setColour("green", COLOR_INCREMENT)}} onDecrease={()=>{setColour("green", -1 * COLOR_INCREMENT)}} color="Green"/>
            <ColorCounter onIncrease={()=>{setColour("blue", COLOR_INCREMENT)}}  onDecrease={()=>{setColour("blue", -1 * COLOR_INCREMENT)}} color="Blue"/>
            <View style={{height:150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareScreen;