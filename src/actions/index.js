

export const ADD_HABITS = 'ADD_HABITS'
export const ADD_MUL_HABITS = 'ADD_MUL_HABITS'


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