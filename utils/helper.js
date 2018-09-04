import { AsyncStorage } from 'react-native'

export const CARDS_STORAGE_KEY = 'FlashCards.Storage.Key'


export function getDecks(callback) {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY, callback)
}

export function getDeck(id) {
    return getDecks((err, decks) => {
        const decksJson = JSON.parse(decks)
        return decksJson[id]
    })
}

export function saveDeckTitle(title, callback) {
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }), callback)
}

export function addCardToDeck(title, card, callback) {
    return getDecks((decks) => {
        const decksJson = JSON.parse(decks)
        decksJson[title].questions.push(card)
        AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(decksJson), callback)
    })
}