import React, { useState } from 'react'
import { lastDays, weeks } from '../helpers';
import { v4 } from 'uuid'
import { BsPatchCheckFill } from 'react-icons/bs'
import { MdRadioButtonUnchecked, MdArrowBackIosNew } from 'react-icons/md'
import { IoCloseCircle } from 'react-icons/io5'
import { changeStatus } from '../actions';
import { Link, Navigate, useNavigate } from 'react-router-dom';



const Weekview = (props) => {
    let habits = props.habits;
    const theme = props.set;
    const possibleStatus = ['none', 'done', 'notDone'];
    const nav = useNavigate();

    const handleStatusChange = (habit, week, status) => {
        const habitIndex = habits.indexOf(habit);   // index of the clicked habit
        const weekIndex = habit.details.indexOf(week) // find the habit where the index needs to be changed
        const nextIndex = (possibleStatus.indexOf(status) + 1) >= possibleStatus.length ? 0 : possibleStatus.indexOf(status) + 1; //next possible status
        const weekday = Object.keys(week)[0]; //weekday

        let newHabits = [...habits]

        //check if prev status is done
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

    const handleBack = () => {
        nav('/')
    }

    if (!habits || habits.length === 0)
        return (
            <div className='flex justify-center'>
                <ul className='gap-3 w-11/12 md:w-2/3 mt-2 md:mt-5 h-full overflow-x-hidden overflow-y-auto'>

                    <h2 className='mt-4 p-4 text-slate-400'>
                        <button onClick={handleBack} className={`flex mb-4 items-center justify-around w-24 ${theme === 'dark' ? 'btn_dark' : ''}`}>
                            <MdArrowBackIosNew className='text-slate-100 z-10' />
                            Back
                        </button>
                        Nothing to show! Create your habits to track..
                    </h2>
                </ul>
            </div>
        )

    return (
        <div className='flex justify-center'>
            <ul className='gap-3 w-11/12 md:w-2/3 mt-2 md:mt-5 h-full overflow-x-hidden overflow-y-auto'>
                <button onClick={handleBack} className={`flex items-center justify-around w-24 ${theme === 'dark' ? 'btn_dark' : ''}`}>
                    <MdArrowBackIosNew className='text-slate-100 z-10' />
                    Back
                </button>
                {
                    habits.map((habit) => {
                        return (
                            <>
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

                                    <ul className='flex gap-2 justify-between overflow-x-auto'>
                                        {
                                            lastDays.map((day, index) => {
                                                const status = habit.details[index][weeks[day.getDay()]];

                                                return (
                                                    <li
                                                        value={status}
                                                        onClick={() => handleStatusChange(habit, habit.details[index], status)}
                                                        key={`${habit.id}-${v4()}`}
                                                        className={`flex cursor-pointer flex-col items-center justify-center p-4 w-28 rounded-md ${theme === 'dark' ? 'bg-slate-700 text-cyan-500' : 'bg-slate-100 text-orange-400'}`}
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
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Weekview