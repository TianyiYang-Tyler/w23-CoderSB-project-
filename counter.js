import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

const Counter = ({Allot, count, setCount, wired, action, go, setGo}) => {
  // Set the initial count to 0
  if (wired == 1) [count, setCount] = useState(0);
  useEffect(() => {
    // increment the count by 1
    const countTimer = setInterval(() => {
      if (go) setCount((prevCount) => Math.min(Allot, prevCount + 0.01));
    // every 10 milliseconds
    }, 10);
    if (count >= Allot) (wired == 1) ? action() : wired=1; 
    // and clear this timer when the component is unmounted
    return function cleanup() {
      clearInterval(countTimer);
    };
  });

  return (<Text style={styles.timerFont}> {Math.round((Allot - count)*1000)/1000}</Text>);
};

const styles = StyleSheet.create({
  timerFont: {
    fontFamily: 'Glametrix',
    fontSize: 36,
  }
})

export default Counter;
