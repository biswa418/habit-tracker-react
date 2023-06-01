import React, { Component } from 'react'
import DefaultView from '../component/DefaultView'

class Home extends Component {
    render() {
        const theme = this.props.set;

        return (
            <>
                <div className='flex w-3/4 mx-auto'>
                    <div className='m-2 w-1/3'>
                        <h2 className='text-2xl m-5 mx-0 flex items-center justify-between'>
                            Your habits
                            <button className={`text-base p-2 uppercase font-semibold ${theme} ${theme === 'dark' ? 'btn_dark' : ''}`}>
                                Add
                            </button>
                        </h2>
                        <hr />
                    </div>

                    <DefaultView />
                </div >
            </>
        )
    }
}


export default Home