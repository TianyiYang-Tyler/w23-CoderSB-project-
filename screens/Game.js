import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import {PauseButton, Tile, ColorPrompt} from "../buttons.js"
import { useRoute } from '@react-navigation/native';

export default function HomeScreen({navigation}) {

  const [timesPressed, setTimesPressed] = useState(0);  
  const [score, setScore] = useState(0);
  const [go, setGo] = useState(false);
  const route = useRoute();
  const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return Math.round(Math.random() * 16).toString(16);
  }); 
  };
 
  let colorArray = Array.from({length: 9}, (_,index) => randomHexColor()); 
  let promptLog = 'Current target: No.';
  let num = Math.floor(Math.random() * 9); 
  let accLog = 'Accuracy: ';
  let scoreLog = '			Score: '; 
  let acc = (timesPressed > 0) ? Math.round(score/timesPressed * 1000)/1000 : 0; 
  let cps = (sum > 0) ? Math.round(timesPressed/sum*100)/100 : 0; 
  let sum = (route && route.params) ? route.params.message : 30;

  const Clicker = () => {
    setGo(Current => 0)
    Alert.alert(
    'Paused',
    'Click OK to resume',
    [
           {text: 'OK', onPress: () => setGo(Current => 1)},
    ]
) 
  }
  const Finish = () => {
    Alert.alert(
    'Time is up',
    'Your final score is ' + score + ' with accuracy ' + acc + ', your clicks per second is ' + cps,
    [   
           {text: 'Return to menu', onPress: () => navigation.popToTop()},
    ]   
) 
  }  

  return (
    <View style={styles.appContainer}>
	<ColorPrompt  
        Color = {colorArray[num]}	
	ID = "pressable_press_console"
        Log = {promptLog+(num+1)}
        Sum = {sum}
	wired = {1}
	action = {Finish}
	go = {go}
	setGo = {setGo}
	/>
	<Pressable
        onPress={() => {
          setTimesPressed(current => 0);
	  setScore(current => 0); 
	  setGo(current => 0); 
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
        <Text testID="pressable_press_console" style={styles.text}>{accLog + acc + scoreLog + score}</Text>
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
        setGo = {setGo}	/>
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
        setGo = {setGo}	/>     
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
        go = {go}
        setGo = {setGo}
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
