import React, {Component, createElement} from 'react';

export default function Btnform (props) {
    return (
        <div className="btn_wrapper">
            <label htmlFor="">
                <button className="btn">{props.name}</button>
            </label>
        </div>
    );
}