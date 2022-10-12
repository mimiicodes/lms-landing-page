import React from "react"
import './CourseOutlineCard.scss'

export default function CourseOutlineCard(props) {
    
    return (
        <>
            <div className="course-outline-card" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                <div className="course-outline-card--image--container">
                    <img alt="logo"
                        src={`${props.imageUrl}`} 
                        className="course-outline-card--image" 
                    />
                </div>
                <div className="course-outline-card--stats">
                    <h2 className="course-outline-card--title">{props.title}</h2>
                    <p>
                    <span className="course-outline-card--desc">{props.description}</span>
                    </p>
                    <p className="course-outline-card-time-taken">{props.timeTaken}</p>
                </div>
            </div>
        </>
    )
}