import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { handleInitialData, handleAddDeck } from '../actions';

class Decks extends Component {
    componentDidMount() {
        this.props.loadDummyDeck('DummyDeck')
    }

    addDeck = () => {
        this.props.loadDummyDeck('DummyDeck1')
    }

    render() {
        const { decks } = this.props
        return (<View>
            <Text>{JSON.stringify(decks)}</Text>
            <TouchableOpacity style={styles.iosSubmitBtn} onPress={this.addDeck}>Add</TouchableOpacity>
        </View>)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadDecks: () => dispatch(handleInitialData()),
        loadDummyDeck: (title) => dispatch(handleAddDeck(title))
    }
}

const styles = StyleSheet.create({
    iosSubmitBtn: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40
    }
})



export default connect(({ decks }) => ({ decks }), mapDispatchToProps)(Decks)