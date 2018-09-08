import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { gray, white } from '../utils/colors';

export default function Deck(props) {
    const { deck } = props

    return (<View style={styles.container}>
        <View style={styles.textsView}>
            <Text style={styles.deckTitle}>{deck.title}</Text>
            <Text style={styles.cardsCount}>{deck[deck.title].questions.length} cards</Text>
        </View>

        <View style={styles.buttonsView}>
            <TouchableOpacity style={{ backgroundColor: white, borderWidth: 1, borderRadius: 5, padding: 10, margin:10 }}>
                <Text style={{ color: 'black', fontSize: 20 }}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 5, padding: 10, margin:10 }}>
                <Text style={{ color: white, fontSize: 20 }}>Start Quiz</Text>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsView: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    deckTitle: {
        color: 'black',
        fontSize: 40
    },
    cardsCount: {
        color: gray,
        fontSize: 20
    }
})