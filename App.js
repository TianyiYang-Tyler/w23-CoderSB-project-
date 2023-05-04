import HomeScreen from "./screens/HomeScreen";
import Game from "./screens/Game";
import EasterEgg from "./screens/EasterEgg";
import Credits from "./screens/Credits";
import Settings from "./screens/Settings";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import { StatusBar } from "expo-status-bar";

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
  'Glametrix': require('./assets/Fonts/glametrix-font/Glametrix-oj9A.otf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  };

  componentDidMount() {
    this._loadFontsAsync();
  };
  
  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
  
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Game" component={Game} />
	    <Stack.Screen name="Settings" component={Settings} />
	    <Stack.Screen name="Credits" component={Credits} />
	    <Stack.Screen name="EasterEgg" component={EasterEgg} />
          </Stack.Navigator>
        </NavigationContainer>
  );
  }
}
