import React from "react"
import './Card.css'

export default function Card(props) {
    
    return (
        <>
            <div className="card">
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