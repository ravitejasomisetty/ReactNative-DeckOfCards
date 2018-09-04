import { RECEIVE_DECKS } from "../actions";

export default function decksWithCards(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                decks: action.decks
            }
        default:
            return state
    }
}