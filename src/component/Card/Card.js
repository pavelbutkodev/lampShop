import React, { Component } from 'react';
import './Card.scss';

export default function Card(props) {
    return (
        <div className="wrapper">
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
}