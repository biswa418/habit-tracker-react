import React, { Component } from 'react'
import DefaultView from '../component/DefaultView'
import ShowModal from '../component/ShowModal';
import { addHabits, addMulHabits } from '../actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }

    handleClick = (e) => {
        const currentView = this.state.showModal;

        this.setState((prevState) => ({
            ...prevState,
            showModal: !currentView
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
                                className={`text-base p-0 md:p-2 uppercase font-semibold ${theme} ${theme === 'dark' ? 'btn_dark' : ''}`}
                                onClick={this.handleClick}
                                disabled={showModal}
                            >
                                Add
                            </button>
                        </h2>
                        <hr />

                        <ul className='gap-3 mt-2 md:mt-5 h-[200px] overflow-x-hidden overflow-y-auto'>
                            {
                                habits.map((habit) => {
                                    return (
                                        <li key={habit.id} className={`p-4 m-2 mx-0 min-w-[130px] w-full rounded-md ${theme === 'dark' ? 'bg-slate-600' : 'bg-slate-200'}`}>
                                            {habit.title}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <DefaultView blur={showModal} />
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