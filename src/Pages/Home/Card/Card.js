import React from "react"
import './Card.scss'

export default function Card(props) {
    
    return (
        <>
            <div className="card" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
                <div className="card--image--container">
                    <img alt="logo"
                        src={`${props.imageUrl}`} 
                        className="card--image" 
                    />
                </div>
                <div className="card--stats">
                    <h2 className="card--title">{props.title}</h2>
                    <p>
                    <span className="card--desc">{props.description}</span>
                    </p>
                </div>
            </div>
        </>
    )
}