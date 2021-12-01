import React from 'react'



const User = ({match}) => {


    return (
        <div>
            <h1>In user {match.params.name} page</h1>
        </div>
    )
}

export default User
