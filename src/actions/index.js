

export const ADD_HABITS = 'ADD_HABITS'
export const ADD_MUL_HABITS = 'ADD_MUL_HABITS'
export const SET_HABITS = 'SET_HABITS'
export const DELETE_HABIT = 'DELETE_HABIT'


export function addHabits(habit) {
    return {
        type: ADD_HABITS,
        habit
    }
}

export function addMulHabits(habits) {
    return {
        type: ADD_MUL_HABITS,
        habits
    }
}

export function changeStatus(habits) {
    return {
        type: SET_HABITS,
        habits
    }
}

export function deleteHabit(habit) {
    return {
        type: DELETE_HABIT,
        habit
    }
}