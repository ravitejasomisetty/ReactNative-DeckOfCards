import React, { Component } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { handleInitialData, handleAddDeck } from '../actions';
import { white, lightPurp, orange } from '../utils/colors';

class Decks extends Component {

    componentDidMount() {
        this.props.loadDecks()
    }

    render() {
        const { decks, navigation } = this.props

        if (!decks || Object.keys(decks).length == 0)
            return <View style={[styles.container, {
                alignItems: 'center',
                justifyContent: 'center'
            }]}><Text style={{ fontSize: 20, color: orange }}>No decks found!!</Text></View>

        return (

            <ScrollView style={styles.container}>
                {Object.values(decks).map(deck =>
                    <TouchableOpacity key={deck.title} style={styles.deckItem}
                        onPress={() => navigation.navigate('Deck', { title: deck.title })}>
                        <Text style={styles.deckTitle}>{deck.title}</Text>
                    </TouchableOpacity>)}
            </ScrollView>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadDecks: () => dispatch(handleInitialData())
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    deckItem: {
        flex: 1,
        height: 150,
        backgroundColor: lightPurp,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    deckTitle: {
        color: white,
        fontSize: 20
    }
})



export default connect(({ decks }) => ({ decks }), mapDispatchToProps)(Decks)