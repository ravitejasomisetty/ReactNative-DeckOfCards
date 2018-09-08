import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import KeyboardInput from './KeyboardInput';

export default function NewDeck() {

    return (
        <View style={styles.container}>
            <View style={[styles.textsView, styles.center]}>
                <Text style={styles.questionText}>What is the title of your new deck?</Text>
            </View>

            <View style={styles.buttonsView}>
                <KeyboardInput placeholderText='Deck Title' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 10
    },
    questionText: {
        color: 'black',
        fontSize: 60
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textsView: {
        flex: 0.75,
    },
    buttonsView: {
        flex: 0.25,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
})