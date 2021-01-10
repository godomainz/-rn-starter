import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

const randomRgb = ():string => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const ColorScreen = () => {
    const [ colors, setColors ] = useState<string[]>([]);
    return (
        <View>
            <Button title="Add a Color" onPress={()=>{
                setColors([...colors, randomRgb()]);
            }}/>
            <FlatList 
                keyExtractor={(color)=>color} 
                data={colors} 
                renderItem={({item})=><View style={{ height: 100, width: 100, backgroundColor: item }}></View>}
            />
        </View>
    ); 

}

const styles = StyleSheet.create({});

export default ColorScreen;