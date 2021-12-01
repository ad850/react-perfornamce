import React from 'react'

import { useState } from 'react';

import Home from './Home';

const App = () => {


    const [state, setstate] = useState(1);
    const [num, setnum] = useState(0);
    console.warn("parent render")

    return (

        <div>

            <h1>{state}</h1>

            <Home name={num} />


            <button onClick={() => { setstate(state + 1) }}>Click</button>
            <button onClick={() => { setnum(num+ 1) }}>Click</button>

        </div>
    )
}

export default App

