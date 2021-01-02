import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="숫자 추측해버리기" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    flex : 1
  }
});
