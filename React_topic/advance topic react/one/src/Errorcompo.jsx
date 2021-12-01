import React from 'react'

const Errorcompo = () => {

    if (true) {

        throw new Error("Custom error")

    }

    return (
        <div>

        </div>
    )
}

export default Errorcompo;
