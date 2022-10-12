import React from "react"
import './CoursesCard.scss'

export default function CoursesCard(props) {
    
    return (
        <>
            <div className="courses-card" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
                <div className="courses-card--image--container">
                    <img alt="logo"
                        src={`${props.imageUrl}`} 
                        className="courses-card--image" 
                    />
                </div>
                <div className="courses-card--stats">
                    <h2 className="courses-card--title">{props.title}</h2>
                    <p>
                    <span className="courses-card--desc">{props.description}</span>
                    </p>
                    <p className="no-of-courses">{props.noOfCourses}</p>
                </div>
            </div>
        </>
    )
}