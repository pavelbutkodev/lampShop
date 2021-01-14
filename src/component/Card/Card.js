import React from 'react';
import {useHistory
} from 'react-router-dom';
import './Card.scss';

const Card = (props) => {
    let history = useHistory();

    const handleCkick = () => {
        history.push(`/page/${props.id}/`)
    }
    return (
        <div className="card_wrapper" onClick={handleCkick}>
            <div className="main">
                <img src={props.img} alt={props.text}/>
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
}
export default Card;