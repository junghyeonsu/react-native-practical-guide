import React, { useState } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import MainButton from '../components/MainButton'
import Colors from '../constants/colors'

const StartGameScreen = (props) => {
    
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if ( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                '이상한 숫자에요!', 
                '숫자는 1에서 99사이의 수 여야 합니다!', 
                [{text : '확인', style : 'destructive', onPress : resetInputHandler}])
            return;
        } 

        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
        <Card style={styles.summaryContainer}>
            <Text>선택한 번호는</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onPress={() => props.onStartGame(selectedNumber)}> 
                게임 시작 
            </MainButton>
        </Card>
        )
    }
    
    return (
        <TouchableWithoutFeedback 
        onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>게임을 시작합시다</Text>
                <Card style={styles.inputContainer}>
                    <Text>숫자 고르기</Text>
                    <Input 
                        style={styles.input} 
                        autoCapitalize='none'  
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength={2} 
                        blurOnSubmit
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="초기화" 
                                onPress={resetInputHandler} 
                                color={Colors.accent} 
                            />
                        </View>
                        <View style={styles.button}>
                            <Button 
                                title="확인" 
                                onPress={confirmInputHandler} 
                                color={Colors.primary} 
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 10,
        alignItems : 'center',
    },
    title : {
        fontSize : 20,
        marginVertical : 10,
    },
    inputContainer : {
        width : 300,
        maxWidth : '80%',
        alignItems : 'center',
    },
    buttonContainer : {
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-between' ,
        paddingHorizontal : 15
    },
    button : {
        width : 100
    },
    input : {
        width : 50,
        textAlign : 'center'
    },
    summaryContainer : {
        marginTop: 20,
        alignItems: 'center'
    }
})

export default StartGameScreen