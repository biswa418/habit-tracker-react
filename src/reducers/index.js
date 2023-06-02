import { ADD_HABITS, ADD_MUL_HABITS, SET_HABITS } from '../actions'
import { intitialTrack } from '../helpers'

const defaultState = [{
    id: 0,
    title: 'Swimming',
    desc: 'Go for a swim',
    done: 0,
    details: JSON.parse(JSON.stringify(intitialTrack))
},
{
    id: 1,
    title: 'Running',
    desc: 'Go for a run',
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
                    id: state.length,
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

        default:
            return state
    }
}