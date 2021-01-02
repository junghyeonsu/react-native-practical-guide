import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>게임을 시작합시다</Text>
            <View style={styles.inputContainer}>
                <Text>숫자 고르기</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="초기화" onPress={() => {}} />
                    <Button title="확인" onPress={() => {}} />
                </View>
            </View>
        </View>
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
        alignItems : 'center'
    },
    buttonContainer : {
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-between' ,
        paddingHorizontal : 15
    }
})

export default StartGameScreen