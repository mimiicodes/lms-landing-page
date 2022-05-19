import React from "react"
import '../Tile/Tile.css'
import {BsFillPatchQuestionFill} from 'react-icons/bs'

export default function Card(props) {
    
    return (
        <>
            <div className="tile">
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