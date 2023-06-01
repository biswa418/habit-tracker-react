import { ADD_HABITS, ADD_MUL_HABITS } from '../actions'

const defaultState = [{
    id: 0,
    title: 'Swimming',
    desc: 'Go for a swim'
},
{
    id: 1,
    title: 'Running',
    desc: 'Go for a run'
}
]

export function habits(state = [...defaultState], action) {
    switch (action.type) {
        case ADD_HABITS:
            return [
                ...state,
                {
                    id: state.length,
                    ...action.habit
                }
            ]

        case ADD_MUL_HABITS:
            console.log('ere')
            return [
                ...state,
                ...action.habits
            ]

        default:
            return state
    }
}