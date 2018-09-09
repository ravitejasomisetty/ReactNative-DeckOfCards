import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const CARDS_STORAGE_KEY = 'FlashCards.Storage.Key'
const NOTIFICATION_KEY = "FlashCards.Notifications.Key"


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
    return getDecks((err, decks) => {
        const decksJson = JSON.parse(decks)
        decksJson[title].questions.push(card)
        AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(decksJson), callback)
    })
}

export function clearLocalNotification() {
    AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(() => Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification() {
    return {
        title: 'Quiz with Flashcards',
        body: "Remember to study for today",
        ios: {
            sound: true
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day'
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }

                    })
            }
        })
}