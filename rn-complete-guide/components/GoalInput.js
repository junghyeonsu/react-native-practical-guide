import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
              placeholder="추가 할 내용을 입력해주세요." 
              style={styles.textInput}
              onChangeText={goalInputHandler}
              value={enteredGoal}
            />
            <Button 
              title="추가" 
              onPress={() => props.onAddGoal(enteredGoal)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
    },
})

export default GoalInput