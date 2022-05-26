import React from "react"
import './WwoCard.scss'

export default function WwoCard(props) {
    
    return (
        <>
            <div className="offered-item">
                <div className="offered-image-container">
                    <img alt="logo"
                        src={`${props.imageUrl}`} 
                        className="offered-image" 
                    />
                </div>
                <div className="offered-stats">
                    <h2 className="offered-title">{props.title}</h2>
                    <p>
                    <span className="offered-description">{props.description}</span>
                    </p>
                </div>
            </div>
        </>
    )
}