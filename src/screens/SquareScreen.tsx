import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT:number = 15;

const SquareScreen = () => {
    const [red, setRed] = useState<number>(0);
    const [green, setGreen] = useState<number>(0);
    const [blue, setBlue] = useState<number>(0);

    const setColour = (color:string, change:number) => {
        console.log(color);
        console.log("red ",red);
        console.log("green ",green);
        console.log("blue ",blue);
        if(color === "Red" || color === "red" ){
            if( ( red + change ) > 255 || ( red + change ) < 0 ){
                return;
            }
            setRed( red + change);
        }
        if(color === "Green" || color === "green" ){
            if( ( green + change ) > 255 || ( green + change ) < 0 ){
                return;
            }
            setGreen( green + change);
        }
        if(color === "Blue" || color === "blue" ){
            if( ( blue + change ) > 255 || ( blue + change ) < 0 ){
                return;
            }
            setBlue( blue + change);
        }
    }
    

    return (
        <View>
            <ColorCounter onIncrease={()=>{setColour("red", COLOR_INCREMENT)}} onDecrease={()=>{setColour("red", -COLOR_INCREMENT)}} color="Red"/>
            <ColorCounter onIncrease={()=>{setColour("green", COLOR_INCREMENT)}} onDecrease={()=>{setColour("green", -COLOR_INCREMENT)}} color="Green"/>
            <ColorCounter onIncrease={()=>{setColour("blue", COLOR_INCREMENT)}}  onDecrease={()=>{setColour("blue", -COLOR_INCREMENT)}} color="Blue"/>
            <View style={{height:150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareScreen;