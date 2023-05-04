import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Button, StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function HomeScreen({navigation}) {

const Pic1 = () => { return( <Image style={styles.image} source={require('../pics/DreamIsSus.png')} />)};

const Padding = () => { return (<View style={styles.appContainer}></View>)}

  return (
    <View style={styles.appContainer}>
      <View style={styles.ScreenTitle}>
        <Text style={styles.TitleFormat}>Menu</Text>
      </View>
      <View style={styles.BottonContainer}>
        <Button title="Start Game" onPress={() => navigation.navigate("Game")} />
	<Padding /><Padding />
        <Button title="Game Setting" onPress={() => navigation.navigate("Settings")}/>
	<Padding /><Padding />
        <Button title="Credits" onPress={() => navigation.navigate("Credits")}/>
	<TouchableOpacity onPress={() => navigation.navigate("EasterEgg")}><Pic1 /></TouchableOpacity> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 3,
    padding: 20,
  },
  ScreenTitle: {
    flex: 1,
    borderWidth: 5,
    borderColor: "#cccccc",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    textAlign: "center",
  },
  BottonContainer: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8, 
  },
  TitleFormat: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Glametrix",
    padding: 10,
    margin: 10,
  },
  image: {
    flex: 5,
    width: 60,
    height: 20,
    margin: 10,
    resizeMode: 'contain'
}
});
