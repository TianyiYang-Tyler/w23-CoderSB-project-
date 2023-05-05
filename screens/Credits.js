import React from 'react';
import {StyleSheet, Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 32,
  height: 32,
};

const App = () => (
  <ScrollView style={styles.paragraphs}>
    <Image source={logo} />
	<Text style={styles.random}>2022-2023 UCSB CoderSB project series</Text>
	<Text style={styles.padding}></Text>
	<Text>Project leader, game & UI designer: <Text style={styles.name}>Tianyi "Tyler" Yang</Text></Text>
	<Text style={styles.padding}></Text>	
	<Text>Special thanks to Xinyao Song for setting up initial useNavigators</Text>
    <Image source={logo} />
  </ScrollView>
);

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return Math.round(Math.random() * 16).toString(16);
  }); 
  };

const styles = StyleSheet.create({
  name: {fontSize: 32, fontFamily: 'Glametrix', color: '#0373fc'},
  paragraphs: {
    flexDirection: 'column',
    margin: 40,
    textAlign: 'center',
  },
  padding: {margin: 10,},
  random: {
    fontSize: 40,
    color: randomHexColor(),
  }
})

export default App;
