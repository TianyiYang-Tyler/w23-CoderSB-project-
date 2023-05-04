import { Button, StyleSheet, Text, TextInput, 
    View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
  
const Settings = () => {
  const [message, setMessage] = useState('');
  const navigation = useNavigation();
  const goToMessageScreen = () => {
    navigation.navigate('Game', {
      message,
    });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time Customization</Text>
      <TextInput
        placeholder="Enter total time for game clock (in seconds)"
        value={message}
        onChangeText={(text) => setMessage(text)}
        style={styles.input}
      />
      <Button title="Confirm & Start game" 
        onPress={goToMessageScreen} color="green" />
    </View>
  );
};
  
export default Settings;
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 50,
  },
  input: {
    width: '75%',
    padding: 10,
    marginTop: 20,
    color: '#000',
  },
});
