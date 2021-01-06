import React, { useState, useRef, useEffect } from 'react';
import {View, Text, StyleSheet, Button, Alert, ScrollView} from 'react-native';

import { Ionicons } from '@expo/vector-icons'

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import MainButton from '../components/MainButton'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const renderListItem = (value, numOfRound) => (
    <View key={value} style={styles.listItem}>
        <Text>#{numOfRound}</Text>
        <Text>{value}</Text>
    </View>
);

const GameScreen = props => {
    const initialGuess =  generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(pastGuesses.length);
        }
    }, [currentGuess, props.userChoice, props.onGameOver]);

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < props.userChoice) || 
            (direction === 'greater' && currentGuess > props.userChoice)
        ) {
            Alert.alert('거짓말 하지마요!', '너는 이게 거짓말인걸 알고있잖아...', [{text : '미안해', style : 'cancel'}])
            return;
        };

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
    }

    return (
        <View style={styles.screen}>
            <Text>상대방의 추측</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={() => nextGuessHandler('lower')}>
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton onPress={() => nextGuessHandler('greater')}>
                    <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
            </Card>
            <View style={styles.list}>
                <ScrollView>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    list: {
        width: '80%',
        flex: 1
    },
    listItem: {
        borderColor: 'black',
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    }
});

export default GameScreen;