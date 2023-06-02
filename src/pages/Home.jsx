import React, { Component } from 'react'
import DefaultView from '../component/DefaultView'
import ShowModal from '../component/ShowModal';
import { IoCloseCircle } from 'react-icons/io5'
import { Navigate } from 'react-router-dom';
import { BsFillCalendarCheckFill, BsPlusSquareFill } from 'react-icons/bs'
import { deleteHabit } from '../actions';

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

    handleDelete = (habit) => {
        this.props.dispatch(deleteHabit(habit))
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
                                className={`text-base p-4 flex justify-center items-center w-max uppercase font-semibold ${theme} ${theme === 'dark' ? 'btn_dark' : ''}`}
                                onClick={this.handleClick}
                                disabled={showModal}
                            >
                                <BsPlusSquareFill />
                            </button>
                        </h2>
                        <hr />

                        <ul className='gap-3 mt-2 md:mt-5 h-[200px] md:h-[400px] overflow-x-hidden overflow-y-auto'>
                            {
                                habits.map((habit) => {
                                    return (
                                        <div key={habit.id} className={`p-4 m-2 mx-0 flex justify-between items-center min-w-[130px] w-full rounded-md ${theme === 'dark' ? 'bg-slate-600' : 'bg-slate-200'}`}>
                                            <li className='w-full h-full cursor-pointer' onClick={(e) => { e.preventDefault(); this.setHabit(habit.id) }}>
                                                {habit.title}
                                            </li>

                                            <div className='bg-transparent w-max p-2' onClick={(e) => { e.preventDefault(); this.handleDelete(habit) }}>
                                                <IoCloseCircle />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className={`w-full md:w-3/5 m-0 md:ml-16 md:mt-2 ${showModal ? 'blur-sm' : ''}`}>
                        <div className='m-2 md:m-5 mx-0 flex flex-col'>
                            <div className='flex text-xl my-4 md:my-0 mx-0 md:mx-12 items-center md:justify-around justify-between gap-10'>
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
                            <hr className='mt-2 md:hidden' />

                            <DefaultView blur={showModal} habit={habits.filter((Curr) => Curr.id === this.state.showHabit)} dispatch={this.props.dispatch} habits={habits} theme={theme} />
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