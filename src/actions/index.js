

export const ADD_HABITS = 'ADD_HABITS'


export function addHabits(habit) {
    return {
        type: ADD_HABITS,
        habit
    }
}