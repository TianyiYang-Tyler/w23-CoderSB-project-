import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({navigation}) {

  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }
  let altLog = timesPressed % 2;

  return (
    <View style={styles.appContainer}>
	<Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me to increment'}</Text>
        )}
      </Pressable>
	<View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View> 
	<Pressable
        onPress={() => {
          setTimesPressed(current => 0); 
        }}  
        style={({pressed}) => [
          {   
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },  
          styles.wrapperCustom,
        ]}> 
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me to reset'}</Text>
        )}  
      </Pressable>
	<View style={styles.logBox}>
        <Text testID="pressable_press_console">{altLog}</Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Glametrix',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});
