import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import {PauseButton, Tile, ColorPrompt} from "../buttons.js"

export default function HomeScreen({navigation}) {

  const [timesPressed, setTimesPressed] = useState(0);  
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [go, setGo] = useState(true);

  const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return Math.round(Math.random() * 16).toString(16);
  }); 
  };
 
  let colorArray = Array.from({length: 9}, (_,index) => randomHexColor());

  let promptLog = 'Current target: No.';
  let num = Math.floor(Math.random() * 9); 
  let accLog = 'Accuracy: Nope';
  let scoreLog = '			Score: '; 
  let acc = Math.round(score/timesPressed * 1000)/1000;

  const Clicker = () => {
    Alert.alert(
    'Not Paused',
    'Nope',
    [
           {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]
) 
  }

  return (
    <View style={styles.appContainer}>
	<ColorPrompt  
        Color = {colorArray[num]}
	Num = {num}
	ID = "pressable_press_console"
        Log = {promptLog+(num+1)}
        Sum = {30}
	count = {count}
	setCount = {setCount}
	go = {go}
	setGo = {setGo}
	/>
	<Pressable
        onPress={() => {
          setTimesPressed(current => 0);
	  setScore(current => 0);
	  setCount(current => 0); 
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
        <Text testID="pressable_press_console" style={styles.text}>{accLog + scoreLog + score}</Text>
	</View>
	<View style={styles.row}>
     <Tile
	Color2 = {colorArray[0]}
	Color = '#0373fc'
	timesPressed = {timesPressed}
	setTimesPressed = {setTimesPressed}
	ID = {0}
	Target = {num}
	score = {score}
	setScore = {setScore}
        go = {go}
        setGo = {setGo}
	/>	
	<Tile
        Color2 = {colorArray[1]}
        Color = '#0373fc'
        timesPressed = {timesPressed}
        setTimesPressed = {setTimesPressed}
        ID = {1}
        Target = {num}
        score = {score}
        setScore = {setScore}
        go = {go}
        setGo = {setGo}
	/>
	<Tile
        Color2 = {colorArray[2]}
        Color = '#0373fc'
        timesPressed = {timesPressed}
        setTimesPressed = {setTimesPressed}
        ID = {2}
        Target = {num}
        score = {score}
        setScore = {setScore}
        go = {go}
        setGo = {setGo}
	/>
	</View>

        <View style={styles.row}>
     <Tile
        Color2 = {colorArray[3]}
        Color = '#0373fc'
        timesPressed = {timesPressed}
        setTimesPressed = {setTimesPressed}
        ID = {3}
        Target = {num}
        score = {score}
        setScore = {setScore}
        go = {go}
        setGo = {setGo}       
	/>     
        <Tile
        Color2 = {colorArray[4]}
        Color = '#0373fc'
        timesPressed = {timesPressed}
        setTimesPressed = {setTimesPressed}
        ID = {4}
        Target = {num}
        score = {score}
        setScore = {setScore}
        go = {go}
        setGo = {setGo}
	/>
        <Tile
        Color2 = {colorArray[5]}
        Color = '#0373fc'
        timesPressed = {timesPressed}
        setTimesPressed = {setTimesPressed}
        ID = {5}
        Target = {num}
        score = {score}
        setScore = {setScore}
        go = {go}
        setGo = {setGo}
	/>
        </View>

        <View style={styles.row}>
     <Tile
        Color2 = {colorArray[6]}
        Color = '#0373fc'
        timesPressed = {timesPressed}
        setTimesPressed = {setTimesPressed}
        ID = {6}
        Target = {num}
        score = {score}
        setScore = {setScore}
        go = {go}
        setGo = {setGo}
	/>     
        <Tile
        Color2 = {colorArray[7]}
        Color = '#0373fc'
        timesPressed = {timesPressed}
        setTimesPressed = {setTimesPressed}
        ID = {7}
        Target = {num}
        score = {score}
        setScore = {setScore}
        go = {go}
        setGo = {setGo}
	/>
        <Tile
        Color2 = {colorArray[8]}
        Color = '#0373fc'
        timesPressed = {timesPressed}
        setTimesPressed = {setTimesPressed}
        ID = {8}
        Target = {num}
        score = {score}
        setScore = {setScore}
        go = {go}
        setGo = {setGo}
	/>
        </View>
    <View style = {styles.center}>
    <PauseButton  
	text='Pause'
          onPress={Clicker}
        />
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
  logBox: {
    padding: 20,
    margin: 10, 
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10%' 
  }
});
