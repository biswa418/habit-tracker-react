import React, { useState } from 'react'
import { addHabits } from '../actions'

const ShowModal = (props) => {
    const theme = props.theme;
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === '') {
            setMessage('Please fill out the title of the habit')
            return;
        }

        props.dispatch(addHabits({
            title,
            desc
        }))

        setTitle('')
        setDesc('')
        props.click()
    }

    return (
        <form className={`absolute left-6 min-w-[300px] md:left-1/3 top-1/4 w-11/12 md:w-2/5 flex rounded-md items-center justify-center flex-col h-max p-4 ${theme === 'dark' ? 'dark_secondary' : 'light_secondary'}`}>
            <h2 className='p-2 uppercase text-lg font-medium'>
                New habit to track
            </h2>
            <button
                className={`w-6 p-0 h-6 absolute right-2 top-2 ${theme} ${theme === 'dark' ? 'btn_dark' : ''}`}
                onClick={(e) => { e.preventDefault(); props.click() }}
            >X</button>
            <input value={title} maxLength={25} required onChange={(e) => setTitle(e.target.value)} className='w-11/12 outline-none md:w-3/4 m-2 p-2 rounded-md' type='text' placeholder='Name of your habit' />
            <textarea value={desc} required onChange={(e) => setDesc(e.target.value)} name='desc' className='w-11/12 outline-none resize-none md:w-3/4 m-2 p-2 rounded-md' type='text' placeholder='Short description' rows={4} />
            <p>{message}</p>
            <button
                className={`m-2 uppercase font-semibold w-20 ${theme} ${theme === 'dark' ? 'btn_dark' : ''}`}
                onClick={handleSubmit}
            >Create</button>
        </form>
    )
}

export default ShowModal