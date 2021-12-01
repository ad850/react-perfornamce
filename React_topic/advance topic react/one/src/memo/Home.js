import React from 'react'

import { memo } from 'react';

const Home = (props) => {

    console.warn("child compo");
    return (
        <div>
            <h1>Child compo {props.name}</h1>




        </div>
    )
}

export default memo(Home);
