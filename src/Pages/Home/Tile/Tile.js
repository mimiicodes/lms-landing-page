import React from "react"
import '../Tile/Tile.scss'
import {BsFillPatchQuestionFill} from 'react-icons/bs'

export default function Card(props) {
    
    return (
        <>
            <div className="tile" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
                <div className="tile--image--container">
                <BsFillPatchQuestionFill className="tile--image"/>
                    {/* <img alt="logo"
                        src={`${props.imageUrl}`} 
                        className="tile--image" 
                    /> */}
                </div>
                <div className="tile--stats">
                    <h2 className="tile--title">{props.question}</h2>
                    <p>
                    <span className="tile--desc">{props.answer}</span>
                    </p>
                </div>
            </div>
        </>
    )
}