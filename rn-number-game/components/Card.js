import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card : {
        shadowColor : 'black',
        shadowOffset : {width : 0, height : 2},
        shadowRadius : 3,
        shadowOpacity : 0.26,
        backgroundColor : 'white', 
        elevation : 5, // 안드로이드를 위한 shadow
        padding : 20,
        borderRadius : 15
    }
})

export default Card