import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { gray, white, purple } from '../utils/colors';
import { connect } from 'react-redux';

class Deck extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title,
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple
            }
        };
    };

    render() {
        const { title, deck, navigation } = this.props

        return (<View style={styles.container}>
            <View style={styles.textsView}>
                <Text style={styles.deckTitle}>{deck.title}</Text>
                <Text style={styles.cardsCount}>{deck.questions.length} cards</Text>
            </View>

            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.addCard} onPress={() => navigation.navigate('NewQuestion', { title })}>
                    <Text style={{ color: 'black', fontSize: 20 }}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.startQuiz} onPress={() => navigation.navigate('Quiz', { deck })}>
                    <Text style={{ color: white, fontSize: 20 }}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        </View>)
    }
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
    },
    addCard: {
        backgroundColor: white,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    startQuiz: {
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 10,
        margin: 10
    }
})

function mapStateToProps({ decks }, { navigation }) {
    const { title } = navigation.state.params

    return {
        title,
        deck: decks[title],
        navigation
    }
}

export default connect(mapStateToProps)(Deck)