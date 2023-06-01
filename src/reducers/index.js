import { ADD_HABITS } from '../actions'


export function habits(state = [], action) {
    switch (action.type) {
        case ADD_HABITS:
            return [
                ...state,
                action.habit
            ]

        default:
            return state
    }
}