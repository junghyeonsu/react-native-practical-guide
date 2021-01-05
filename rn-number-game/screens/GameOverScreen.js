import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'



const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>게임이 끝났습니다.</Text>
            <View style={styles.imageContainer}>
                <Image 
                    // source={require('../assets/success.png')} 
                    source={{uri: 'https://pds.joins.com//news/component/htmlphoto_mmdata/201808/03/6a4290a6-6421-414c-9df0-e09b03ce42a0.jpg'}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
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
    },
    image : {
        width: '100%',
        height: '100%'
    },
    imageContainer : {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden'
    }
})

export default GameOverScreen