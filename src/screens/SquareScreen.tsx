import React, { Reducer, useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT:number = 15;

const RED = "RED";
const GREEN = "GREEN";
const BLUE = "BLUE";
type Color = typeof RED | typeof GREEN | typeof BLUE;

interface State {
  red: number;
  green: number;
  blue: number;
}

interface Action {
    type: Color,
    payload: number;
}

type ChangeRedAction = { type: typeof RED, payload: number };
type ChangeGreenAction = { type: typeof GREEN, payload: number };
type ChangeBlueAction = { type: typeof BLUE, payload: number };

const changeRed = (payload:number):ChangeRedAction =>({
    type: RED,
    payload: payload
});

const changeGreen= (payload:number):ChangeGreenAction =>({
    type: GREEN,
    payload: payload
});

const changeBlue= (payload:number):ChangeBlueAction =>({
    type: BLUE,
    payload: payload
});

const initialState:State = { red: 0, green: 0, blue: 0 };

const reducer = (state: State, action: Action):State => {
    switch (action.type){
        case RED:
            return ( state.red + action.payload > 255 ) || (( state.red + action.payload < 0 )) ? state : { ...state, red: state.red + action.payload };
        case GREEN:
            return ( state.green + action.payload > 255 ) || (( state.green + action.payload < 0 )) ? state : { ...state, green: state.green + action.payload };
        case BLUE:
            return ( state.blue + action.payload > 255 ) || (( state.blue + action.payload < 0 )) ? state : { ...state, blue: state.blue + action.payload };
        default: 
            return state;
    }
};

const SquareScreen = () => {
    const [state, runMyReducer] = useReducer<Reducer<State,Action>>(reducer, initialState);
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter onIncrease={()=>runMyReducer(changeRed(COLOR_INCREMENT))} onDecrease={()=>runMyReducer(changeRed( -1 * COLOR_INCREMENT ))} color="Red"/>
            <ColorCounter onIncrease={()=>runMyReducer(changeGreen(COLOR_INCREMENT))} onDecrease={()=>runMyReducer(changeGreen( -1 * COLOR_INCREMENT ))} color="Green"/>
            <ColorCounter onIncrease={()=>runMyReducer(changeBlue(COLOR_INCREMENT))}  onDecrease={()=>runMyReducer(changeBlue( -1 * COLOR_INCREMENT ))} color="Blue"/>
            <View style={{height:150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareScreen;