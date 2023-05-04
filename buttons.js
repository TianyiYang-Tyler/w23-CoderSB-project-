import React from 'react'
import { Pressable, Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import Counter from "./counter.js"

const width = Dimensions.get('window').width


const PauseButtons = ({ text, onPress, active }) => {
  active = 0;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  )
}

const Tiles = ({Color, Color2, timesPressed, setTimesPressed, ID, Target, score, setScore, go, setGo}) => {
 return (
  <View style={styles.altPressable}>
            <Pressable
	
      onPress={() => {
		setGo(current => 1);	
 		setTimesPressed(current => current + 1);
		if (ID == Target) setScore(current => current + 1);	
	}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? Color : Color2,
          }, 
	styles.wrapperCustom,
        ]}> 
	<Text style={styles.text}>{'												'}</Text> 
      </Pressable>
  </View>
  )
}

const ColorPrompts = ({count, setCount, go, setGo, Sum, Color, ID, Log, wired, action}) => { 
  return ( 
    <View style = {styles.row}>
    <View style={styles.logBox}>
        <Text testID={ID}>{Log}</Text>
      </View>
    <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: Color,
        }}
      />    
	<Counter
	Allot = {Sum}
	count = {count} 
	setCount ={setCount}	
	wired = {wired}
	action = {action}
        go = {go}
        setGo = {setGo}	
	/> 
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: '#3F51B5',
    paddingVertical: 8,
    width: width / 1.3,
    borderRadius: 5
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Glametrix',
  },
  altPressable: {
    flexDirection: 'row', 
    width: width / 3.6,
    height: width / 4.3,
    margin: 12,
  },
  wrapperCustom: {
    borderRadius: 4,
    padding: 3,
  },
  row: {
    flexDirection: 'row',
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  }
})

export const PauseButton = PauseButtons;
export const Tile = Tiles;
export const ColorPrompt = ColorPrompts;
