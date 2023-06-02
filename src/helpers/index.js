
export const weeks = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
]

const Day = (number) => {
    const today = new Date()
    today.setDate(today.getDate() - number)
    return today
}


export const lastDays = [
    Day(6),
    Day(5),
    Day(4),
    Day(3),
    Day(2),
    Day(1),
    Day(0)
]


export const intitialTrack = [
    ...lastDays.reduce((acc, curr) => {
        const week = weeks[curr.getDay()]

        return [...acc, { [week]: "none" }]
    }, [])
]

