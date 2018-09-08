import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { gray, white, red, green } from '../utils/colors';

export default function Quiz(props) {
    const { quiz } = props

    return (<View style={styles.container}>
        <View style={[styles.textsView, styles.center]}>
            <Text style={styles.questionText}>{quiz.question}</Text>
            <TouchableOpacity>
                <Text style={{ color: red, margin: 10, fontSize: 25, fontWeight: 'bold' }}>Answer</Text>
            </TouchableOpacity>
        </View>

        <View style={[styles.buttonsView, styles.center]}>
            <TouchableOpacity style={[styles.correct, styles.center]}>
                <Text style={{ color: white, fontSize: 20 }}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.incorrect, styles.center]}>
                <Text style={{ color: white, fontSize: 20 }}>Incorrect</Text>
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    textsView: {
        flex: 0.75,
    },
    buttonsView: {
        flex: 0.25,
    },
    questionText: {
        color: 'black',
        fontSize: 60
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    incorrect: {
        backgroundColor: red,
        width: 150,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    correct: {
        backgroundColor: green,
        width: 150,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10
    }
})