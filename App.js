import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import Decks from './components/Decks';
import middleware from './middleware'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors';
import Deck from './components/Deck';
import NewDeck from './components/NewDeck';
import NewQuestion from './components/NewQuestion';

export default class App extends React.Component {

  render() {

    return (
      <Provider store={createStore(reducer, middleware)}>
        <MainNavigator />
      </Provider>
    );
  }
}


const TabNavigator = createBottomTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      title: 'DECKS'
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: purple,
      labelStyle: {
        fontSize: 25,
      },
      style: {
        padding: 10,
        height: 56,
        backgroundColor: white,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

const MainNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator
  },
  Deck: {
    screen: Deck
  },
  NewDeck: {
    screen: NewDeck
  },
  NewQuestion: {
    screen: NewQuestion
  }
})