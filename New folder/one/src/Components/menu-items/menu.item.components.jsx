
import React from 'react'

import './menu-item.style.scss';

import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, size, imageUrl, match, history, linkurl }) => {
    return (

        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url} ${linkurl}`)}>


            <div

                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}

            />

            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>

    )
}
export default withRouter(MenuItem);