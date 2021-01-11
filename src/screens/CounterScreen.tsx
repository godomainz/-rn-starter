import React, { Reducer, useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

interface State {
    counter: number;
}
const initialState: State = {
    counter: 0
}

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

interface Action {
    type: typeof  INCREASE | typeof DECREASE,
    payload: number;
}

type IncreaseAction = { type: typeof INCREASE, payload: number }
type DecreaseAction = { type: typeof DECREASE, payload: number }

const increase = (payload: number): IncreaseAction =>({
    type: INCREASE,
    payload: payload
})

const decrease = (payload: number): DecreaseAction =>({
    type: DECREASE,
    payload: payload
})

const reducer = (state: State, action: Action):State => {
    switch (action.type){
        case INCREASE:
            return { ...state, counter: state.counter + action.payload };
        case DECREASE:
            return { ...state, counter: state.counter - action.payload };
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer<Reducer<State,Action>>(reducer, initialState);
    const { counter } = state;
    return (
        <View>
            <Button title="Increase" onPress={()=>dispatch(increase(1))}/>
            <Button title="Decrease" onPress={()=>dispatch(decrease(1))}/>
            <Text>Current Count: {counter}</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default CounterScreen;