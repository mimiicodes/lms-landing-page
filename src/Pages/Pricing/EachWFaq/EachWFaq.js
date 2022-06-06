import React from "react"
import './EachWFaq.scss'

export default function Card(props) {
    
    return (
        <>
            <div className="each-faq--stats">
                <h2 className="each-faq--title">{props.question}</h2>
                <p>
                <span className="each-faq--desc">{props.answer}</span>
                </p>
            </div>
        </>
    )
}