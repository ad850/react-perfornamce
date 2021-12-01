import React from 'react'

import "./Card.css"

const Card = ({ image, title, heading }) => {
    return (
        <div className="wrapper">
            <img src="https://picsum.photos/300/170" alt="google" className="image" className="image" />

            <div className="content">
                <div> {title}</div>

                <div>{heading} </div>

                <a href="https://www.netflix.com/in/" alt="google"> <button >Watch Now </button></a>

            </div>
        </div >
    )
}

export default Card
