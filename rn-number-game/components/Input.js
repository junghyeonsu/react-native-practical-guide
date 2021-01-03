import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = prosp => {
    return <TextInput {...prosp} style={{...styles.input, ...prosp.style}} />
}

const styles = StyleSheet.create({
    input : {
        height : 30,
        borderBottomColor : 'grey',
        borderBottomWidth: 1,
        marginVertical : 10
    }
})

export default Input