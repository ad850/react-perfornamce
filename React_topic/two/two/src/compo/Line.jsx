import React from 'react'
import { useState } from 'react';



const Line = ({ text }) => {

    const [style, setstyle] = useState(false);
 
    const dele = () => {

        setstyle(true)
    
    }
    

    return (
        <>

            <li style={{ textDecorationLine: style ? 'line-through' : 'none' }} >
                <button onClick={dele}>❌</button>

                {text}
            </li>





        </>
    )
}

export default Line
