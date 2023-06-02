import React from 'react'
import { lastDays, weeks } from '../helpers';
import { v4 } from 'uuid'
import { BsPatchCheckFill } from 'react-icons/bs'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { IoCloseCircle } from 'react-icons/io5'
import { changeStatus } from '../actions';

const DefaultView = (props) => {
    const habits = props.habits;
    const habit = props.habit[0];

    if (!habit)
        return (
            <h2 className='mt-4 p-4 text-slate-400'>
                Nothing to show! Click on the habit to see..
            </h2>
        )

    const theme = props.theme;
    const day = new Date();
    const possibleStatus = ['none', 'done', 'notDone'];
    const details = habit.details.filter((hab) => Object.keys(hab)[0] === weeks[day.getDay()])
    const status = details[0][weeks[day.getDay()]];

    const handleStatusChange = (selectedHabit, week, status) => {
        const habitIndex = habits.indexOf(selectedHabit);   // index of the clicked habit
        const weekIndex = selectedHabit.details.indexOf(week) // find the habit where the index needs to be changed
        const nextIndex = (possibleStatus.indexOf(status) + 1) >= possibleStatus.length ? 0 : possibleStatus.indexOf(status) + 1; //next possible status
        const weekday = Object.keys(week)[0]; //weekday

        let newHabits = [...habits]

        // //check if prev status is done
        if (newHabits[habitIndex]['details'][weekIndex][weekday] === 'done') {
            newHabits[habitIndex]['done']--
        }

        newHabits[habitIndex]['details'][weekIndex][weekday] = possibleStatus[nextIndex];

        //check if next status is done
        if (possibleStatus[nextIndex] === 'done') {
            newHabits[habitIndex]['done']++
        }

        props.dispatch(changeStatus(newHabits));
    }

    return (
        <div className='flex w-full justify-center'>
            <ul className='gap-3 w-full md:w-2/3 mt-2 md:mt-5 h-full overflow-x-hidden overflow-y-auto'>
                <li key={habit.id} className={`min-w-[130px] w-full mb-16`}>
                    <div className={`p-4 m-2 mx-0 rounded-md flex justify-between items-center  ${theme === 'dark' ? 'bg-slate-600' : 'bg-slate-200'}`}>

                        <h2 className=''>
                            {habit.title}

                            <p className={`text-sm ${theme === 'dark' ? 'text-cyan-500' : 'text-yellow-500'}`}>
                                {habit.desc}
                            </p>
                        </h2>

                        <p>
                            {habit.done ? '0' + habit.done : '00'}/07
                        </p>
                    </div>

                    <div className='flex gap-2 justify-between overflow-x-auto'>
                        <div
                            value={status}
                            onClick={() => handleStatusChange(habit, habit.details.filter((curr) => Object.keys(curr)[0] === weeks[day.getDay()])[0], status)}
                            className={`flex w-1/2 cursor-pointer flex-col items-center justify-center p-4 rounded-md ${theme === 'dark' ? 'bg-slate-700 text-cyan-500' : 'bg-slate-100 text-orange-400'}`}
                        >
                            <h3 className='font-medium text-lg uppercase'>
                                {weeks[day.getDay()]}
                            </h3>

                            <p className='font-light text-xs'>
                                {day.getDate() < 10 ? `0${day.getDate()}` : day.getDate()}
                                /{day.getMonth() + 1 < 10 ? `0${day.getMonth() + 1}` : day.getMonth() + 1}
                            </p>

                            <p className='mt-3'>
                                {status === 'none' && <MdRadioButtonUnchecked />}
                                {status === 'done' && <BsPatchCheckFill className='text-green-500' />}
                                {status === 'notDone' && <IoCloseCircle className='text-red-500' />}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div >
    )
}

export default DefaultView