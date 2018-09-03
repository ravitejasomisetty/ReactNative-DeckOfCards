import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { getDecks, saveDeckTitle, addCardToDeck, CARDS_STORAGE_KEY } from './utils/helper';

export default class App extends React.Component {
  state = { decks: null }
  
  componentDidMount(){
    AsyncStorage.removeItem(CARDS_STORAGE_KEY)
    
    saveDeckTitle('Teja')
    
    addCardToDeck('Teja', { questions: 'q', answers: 'a' })
    
    getDecks().then((decks) => this.setState({decks}))    
  }

  render() {
    const {decks} = this.state

    return (
      <View style={styles.container}>
        <Text>
          {'hi'+decks}
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
