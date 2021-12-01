import React from 'react'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <ul style={{ listStyle: "none" }}>

                <li>      <NavLink to="/about">About</NavLink>  </li>
                <li>      <NavLink to="/contact">contact</NavLink>   </li>
                <li>      <NavLink to="/errpage">errpage</NavLink>   </li>
                <li>      <NavLink to="/user">User</NavLink>  </li>


            </ul>

        </div>
    )
}

export default Navbar
