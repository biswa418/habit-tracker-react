import React from 'react'

const DefaultView = (props) => {
    return (
        <div className={`w-2/3 ${props.blur ? 'blur-sm' : ''}`}>
            DefaultView
        </div>
    )
}

export default DefaultView