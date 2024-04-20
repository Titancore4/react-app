import React from "react";
import "./Card.styles.css"

const Card = ({ text }) => {
    return (
        <div className="card">
            <p>{text}</p>
        </div>
    )
};

export default Card;
