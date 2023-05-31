import React, { useState } from 'react'
import GlobalSwitch from './GlobalSwitch'

const Navbar = (props) => {

    return (
        <nav className={`navbar_${props.set}`}>
            <h1>
                Habbit Tracker
            </h1>
            <GlobalSwitch theme={props.theme} />
        </nav>
    )
}

export default Navbar