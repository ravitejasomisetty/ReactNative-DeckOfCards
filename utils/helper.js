import { AsyncStorage } from 'react-native'

export const CARDS_STORAGE_KEY = 'FlashCards.Storage.Key'


export function getDecks() {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
}

export function getDeck(id) {
    return getDecks().then((decks) => {
        const decksJson = JSON.parse(decks)
        return decksJson[id]
    })
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}

export function addCardToDeck(title, card, cb) {
    return getDecks().then((decks) => {
        const decksJson = JSON.parse(decks)
        decksJson[title].questions.push(card)
        AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(decksJson), cb)
    })
}