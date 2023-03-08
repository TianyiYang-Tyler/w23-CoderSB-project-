import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Game({navigation, route}) {

  return (
    <View style={styles.appContainer}>
      <View style={styles.ScreenTitle}>
        <Text style={styles.TitleFormat}>Game</Text>
      </View>
      <View style={styles.BottonContainer}>
        <Button title="Start Game" onPress={() => navigation.navigate("Game")} />
        <Button title="Game Modes" />
        <Button title="Personal Best" />
        <Button title="Settings" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
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
    flex: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 110,
  },
  TitleFormat: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Inerit",
    padding: 10,
    margin: 10,
  },
});