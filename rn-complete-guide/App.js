import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  StyleSheet,
  View, 
  Button, 
  FlatList 
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (value) => {
    // 상태를 적용하기 전 최신 상태 스냅 샷을 보장하는 문법
    setGoals(goals => [
      ...goals, 
      {id : Math.random().toString(), value: value}
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button 
        onPress={() => setIsAddMode(true)}
        title="새로운 목표 추가" 
      />
      <GoalInput 
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals} 
        renderItem={itemData => 
        <GoalItem
          id={itemData.item.id}
          title={itemData.item.value} 
          onDelete={removeGoalHandler} 
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
