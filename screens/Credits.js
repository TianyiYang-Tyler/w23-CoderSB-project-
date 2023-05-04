import React from 'react';
import {StyleSheet, Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 32,
  height: 32,
};

const App = () => (
  <ScrollView>
    <Image source={logo} />
	<Text fontSize={16}>2022-2023 UCSB CoderSB project series</Text>
	<Text>Project leader, game & UI designer: <Text style={styles.name}>Tianyi "Tyler" Yang</Text></Text>	
	<Text>Special thanks to Xinyao Song for setting up initial useNavigators</Text>
    <Image source={logo} />
  </ScrollView>
);

const styles = StyleSheet.create({
  name: {fontSize: 32, fontFamily: 'Glametrix', color: '#0373fc'}
})

export default App;
