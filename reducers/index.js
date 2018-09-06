import { RECEIVE_DECKS } from "../actions";

export default function decksWithCards(state = {}, action) {
    return {
        decks: decksState(state.decks, action)
    }
}

const decksState = (decks = {}, action) => {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...decks,
                ...action.decks
            }
        default:
            return decks
    }
}