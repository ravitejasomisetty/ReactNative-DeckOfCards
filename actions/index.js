import { getDecks, saveDeckTitle, addCardToDeck } from "../utils/helper";

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks: JSON.parse(decks)
    }
}

export function handleInitialData() {
    return (dispatch) => getDecks((err, decks) => dispatch(receiveDecks(decks)))
}

export function handleAddDeck(title) {
    return (dispatch) => saveDeckTitle(title, () => dispatch(handleInitialData()))
}

export function handleAddCard(card) {
    return (dispatch) => addCardToDeck(title, card, () => dispatch(handleInitialData()))
}