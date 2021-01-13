import React from 'react';
import HeartImg from './img/heart.svg';
import "./Heart.scss";

export default function Heart() {
    return (
        <div className="img">
            <img className="i_lamp_img" src={HeartImg} />
        </div>
    );
}