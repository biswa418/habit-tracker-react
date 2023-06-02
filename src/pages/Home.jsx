import React, { Component } from 'react'
import DefaultView from '../component/DefaultView'
import ShowModal from '../component/ShowModal';
import { addHabits, addMulHabits } from '../actions';
import { Link, Navigate } from 'react-router-dom';
import { BsFillCalendarCheckFill, BsPlusSquareFill } from 'react-icons/bs'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showHabit: 0,
            nav: false,
        }
    }

    handleClick = (e) => {
        const currentView = this.state.showModal;

        this.setState((prevState) => ({
            ...prevState,
            showModal: !currentView
        }))
    }

    setHabit = (id) => {
        console.log(id, 'clicked');

        this.setState((prev) => ({
            ...prev,
            showHabit: Number(id)
        }))
    }

    navTodetailed = () => {
        this.setState((prev) => ({
            ...prev,
            nav: !prev.nav
        }))
    }

    render() {
        const theme = this.props.set;
        const habits = this.props.habits;
        const showModal = this.state.showModal;

        return (
            <>
                <div className='flex flex-col md:flex-row w-11/12 md:w-3/4 mx-auto p-2'>
                    <div className={`md:m-2 md:w-1/3 ${showModal ? 'blur-sm' : ''}`}>
                        <h2 className='text-lg md:text-2xl m-2 md:m-5 mx-0 flex items-center justify-between'>
                            Your habits
                            <button
                                className={`text-base md:p-4 flex justify-center items-center w-max uppercase font-semibold ${theme} ${theme === 'dark' ? 'btn_dark' : ''}`}
                                onClick={this.handleClick}
                                disabled={showModal}
                            >
                                <BsPlusSquareFill />
                            </button>
                        </h2>
                        <hr />

                        <ul className='gap-3 mt-2 md:mt-5 h-[200px] overflow-x-hidden overflow-y-auto'>
                            {
                                habits.map((habit) => {
                                    return (
                                        <li key={habit.id} onClick={() => this.setHabit(habit.id)} className={`p-4 m-2 mx-0 cursor-pointer min-w-[130px] w-full rounded-md ${theme === 'dark' ? 'bg-slate-600' : 'bg-slate-200'}`}>
                                            {habit.title}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className={`w-11/12 md:w-3/5 m-0 md:ml-16 md:mt-2 ${showModal ? 'blur-sm' : ''}`}>
                        <div className='m-2 md:m-5 mx-0 flex flex-col'>
                            <div className='flex text-xl mx-0 md:mx-12 items-center justify-around gap-10'>
                                Done for the day?
                                <button
                                    className={`text-base p-4 flex items-center w-max uppercase font-semibold ${theme} ${theme === 'dark' ? 'btn_dark' : ''}`}
                                    onClick={() => this.navTodetailed()}
                                >
                                    <BsFillCalendarCheckFill />
                                    {
                                        this.state.nav &&
                                        <Navigate to="/week-view" />
                                    }
                                </button>
                            </div>
                            <DefaultView blur={showModal} habit={habits[this.state.showHabit]} dispatch={this.props.dispatch} habits={habits} theme={theme} />
                        </div>
                    </div>
                    {
                        showModal &&
                        <ShowModal click={this.handleClick} dispatch={this.props.dispatch} theme={theme} />
                    }
                </div >
            </>
        )
    }
}


export default Home