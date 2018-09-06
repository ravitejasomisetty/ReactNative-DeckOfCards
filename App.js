import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import Decks from './components/Decks';
import middleware from './middleware'

export default class App extends React.Component {

  render() {

    return (
      <Provider store={createStore(reducer, middleware)}>
        <Decks />
      </Provider>
    );
  }
}
