import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props:any) => {
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={()=>{props.navigation.navigate("Components")}} 
        title="Go to Components demo"/>
        <TouchableOpacity onPress={()=>{console.log("List pressed")}}><Text>Go to list demo</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
