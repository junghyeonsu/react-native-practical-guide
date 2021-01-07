import React from 'react'
import { ScrollView ,StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native'

import Color from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    return (
        <ScrollView>
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
                <Text>시도 횟수 : <Text style={styles.highlight}>{props.roundsNumber}</Text></Text>
                <Text>숫자 : <Text style={styles.highlight}>{props.userNumber}</Text></Text>
                <MainButton onPress={props.onRestart}>
                    새 게임
                </MainButton> 
            </View>
        </ScrollView>
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
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    highlight : {
        color: Color.primary
    }
})

export default GameOverScreen