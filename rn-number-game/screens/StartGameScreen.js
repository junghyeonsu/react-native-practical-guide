import React, { useState, useEffect } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
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
    const [buttonWidth, setButtonWidth ] = useState(Dimensions.get('window').width / 4);
    
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        };
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.addEventListener('change', updateLayout);
        }
    })

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
        <ScrollView>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
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
                            <View style={{width:buttonWidth}}>
                                <View style={styles.button}>
                                    <Button title="초기화" 
                                        onPress={resetInputHandler} 
                                        color={Colors.accent} 
                                    />
                                </View>
                                <View style={{width:buttonWidth}}>
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
            </KeyboardAvoidingView>
        </ScrollView>
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
        width : '80%',
        minWidth : 300,
        maxWidth : '95%',
        alignItems : 'center',
    },
    buttonContainer : {
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-between' ,
        paddingHorizontal : 15
    },
    button : {
        // width : 100
        width: Dimensions.get('window').width / 4,
        // width: '40%' 이거랑 비슷할 수도 있지만 Dimension을 소개하고싶었다.
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