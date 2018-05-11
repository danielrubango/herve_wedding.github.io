import React from 'react';
import './card.css';

const Card = ({ nom, table }) => {
    return (
        <div className={"card-item"}>
            <h2>{ nom }</h2>
            <p>{ table }</p>
        </div>
    );
}

export default Card;
