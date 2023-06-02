import { ADD_HABITS, ADD_MUL_HABITS, DELETE_HABIT, SET_HABITS } from '../actions'
import { intitialTrack } from '../helpers'

const defaultState = [{
    id: 0,
    title: 'Read a book',
    desc: 'Go for 5 pages daily',
    done: 0,
    details: JSON.parse(JSON.stringify(intitialTrack))
},
{
    id: 1,
    title: 'Cardio',
    desc: 'Cardio session - 20 minutes',
    done: 0,
    details: JSON.parse(JSON.stringify(intitialTrack))
}
]

export function habits(state = [...defaultState], action) {
    switch (action.type) {
        case ADD_HABITS:
            return [
                ...state,
                {
                    id: state[state.length - 1]['id'] + 1,
                    done: 0,
                    details: JSON.parse(JSON.stringify(intitialTrack)),
                    ...action.habit
                }
            ]

        case ADD_MUL_HABITS:
            return [
                ...state,
                ...action.habits
            ]

        case SET_HABITS:
            return [
                ...action.habits
            ]

        case DELETE_HABIT:
            return [
                ...state.filter((habit) => habit !== action.habit)
            ]

        default:
            return state
    }
}