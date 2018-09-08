import React, { Component } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { handleInitialData, handleAddDeck } from '../actions';
import { white, lightPurp, gray, orange } from '../utils/colors';
import { createStackNavigator } from 'react-navigation'

class Decks extends Component {

    componentDidMount() {
        this.props.loadDummyDeck('DummyDeck')
    }

    render() {
        const { decks, navigation } = this.props

        if (typeof decks === 'undefined')
            return <Text>No decks found</Text>

        return (

            <View style={styles.container}>
                <ScrollView style={styles.decksList}>
                    {Object.values(decks).map(deck =>
                        <TouchableOpacity key={deck.title} style={styles.deckItem} onPress={() => navigation.navigate('Deck', { deck })}>
                            <Text style={styles.deckTitle}>{deck.title}</Text>
                        </TouchableOpacity>)}
                </ScrollView>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <TouchableOpacity style={styles.addDeck} onPress={() => navigation.navigate('NewDeck')}>
                    <Text style={styles.addDeckText}>Add Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadDecks: () => dispatch(handleInitialData()),
        loadDummyDeck: (title) => dispatch(handleAddDeck(title))
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    decksList: {
        flex: 0.75
    },
    addDeck: {
        flex: 0.25,
        margin: 10,
        backgroundColor: orange,
        alignItems: 'center',
        justifyContent: 'center'
    },
    deckItem: {
        flex: 1,
        height: 150,
        backgroundColor: lightPurp,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    deckTitle: {
        color: white,
        fontSize: 20
    },
    addDeckText: {
        color: white,
        fontSize: 40
    }
})



export default connect(({ decks }) => ({ decks }), mapDispatchToProps)(Decks)