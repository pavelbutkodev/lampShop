import React from 'react';
import HeartImg from './img/heart.svg';
import "./Heart.scss";

export default function Heart() {
    return (
        <div className="img">
            <img src={HeartImg} />
        </div>
    );
}