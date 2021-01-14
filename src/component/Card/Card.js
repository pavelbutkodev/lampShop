import React from 'react';

import './Card.scss';

const Card = (props) => (
    <div className="card_wrapper">
        <div className="main">
            <img src={props.img} alt="lapm1"/>
        </div>
        <div className="text">
            <div className="name">
                {props.text}
            </div>
            <div className="cost">
                ${props.cost}
            </div>
        </div>
    </div>
);

export default Card;