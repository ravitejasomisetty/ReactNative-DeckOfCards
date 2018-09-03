import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDecks, saveDeckTitle, addCardToDeck } from './utils/helper';

export default class App extends React.Component {
  state = { decks: null }

  componentDidMount() {

    saveDeckTitle('Deck1')
    addCardToDeck('Deck1', { questions: 'q', answers: 'a' }, () => 
    this.getDecksToDisplay())
  }

  getDecksToDisplay() {
    getDecks().then((decks) => this.setState({ decks }));
  }

  render() {
    const { decks } = this.state

    return (
      <View style={styles.container}>
        <Text>
          {decks}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
