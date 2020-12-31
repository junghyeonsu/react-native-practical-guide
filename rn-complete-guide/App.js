import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  Button, 
  TextInput, 
  ScrollView, 
  FlatList 
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);

  const addGoalHandler = (value) => {
    // 상태를 적용하기 전 최신 상태 스냅 샷을 보장하는 문법
    setGoals(goals => [
      ...goals, 
      {key : Math.random().toString(), value: value}
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={goals} 
        renderItem={itemData => 
        <GoalItem 
          title={itemData.item.value} 
          onDelete={() => {console.log("tap")}} 
        />} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }  
});
