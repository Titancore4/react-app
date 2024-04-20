import React from "react";
import "./Card.styles.scss"

const Card = ({ text }) => {
    return (
        <div className="card">
            <div className="empty">
                <p className="text">{text}</p>
            </div>
        </div>
    )
};

export default Card;
