import React, { useState } from 'react'
import GlobalSwitch from './GlobalSwitch'

const Navbar = (props) => {

    return (
        <nav className={`navbar_${props.set} py-3 pl-3 md:pl-0 md:py-0`}>
            <h1>
                Habbit Tracker
            </h1>
            <GlobalSwitch theme={props.theme} />
        </nav>
    )
}

export default Navbar