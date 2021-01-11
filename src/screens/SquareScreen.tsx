import React, { Reducer, useReducer } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT:number = 15;

type Color = "red" | "green" | "blue";

interface State {
  red: number;
  green: number;
  blue: number;
}

interface Action {
    colorToChange: Color,
    amount: number;
}

const initialState:State = { red: 0, green: 0, blue: 0 };

const reducer = (state: State, action: Action):State => {
    switch (action.colorToChange){
        case "red":
            return { ...state, red: state.red + action.amount }
        case "green":
            return { ...state, green: state.green + action.amount }
        case "blue":
            return { ...state, blue: state.blue + action.amount }
        default: 
            return state;
    }
};

const SquareScreen = () => {
    const [state, runMyReducer] = useReducer<Reducer<State,Action>>(reducer, initialState);
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter onIncrease={()=>runMyReducer({ colorToChange: "red", amount: COLOR_INCREMENT })} onDecrease={()=>runMyReducer({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })} color="Red"/>
            <ColorCounter onIncrease={()=>runMyReducer({ colorToChange: "green", amount: COLOR_INCREMENT })} onDecrease={()=>runMyReducer({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })} color="Green"/>
            <ColorCounter onIncrease={()=>runMyReducer({ colorToChange: "blue", amount: COLOR_INCREMENT })}  onDecrease={()=>runMyReducer({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })} color="Blue"/>
            <View style={{height:150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareScreen;