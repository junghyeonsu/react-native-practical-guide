import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>게임이 끝났습니다.</Text>
            <Text>시도 횟수 : {props.roundsNumber}</Text>
            <Text>숫자 : {props.userNumber}</Text>
            <Button title="새 게임" onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen