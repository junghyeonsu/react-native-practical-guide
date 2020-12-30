import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="추가 할 내용을 입력해주세요." 
          style={styles.textInput}
        />
        <Button title="추가" />
      </View>
      <View>
        <Text>...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center'
  },
  textInput: {
    borderColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%'
  }
});
