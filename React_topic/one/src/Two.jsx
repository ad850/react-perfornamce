import React from 'react'

import { Name } from './App'



const Two = (props) => {

    const context = useContext(Name)
    return (
        <div>
            <h1>In Two {props.name}</h1>
        </div>
    )
}

export default Two
