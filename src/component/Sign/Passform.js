import React, {Component, createElement} from 'react';

export default function Passform () {
    return (
        <div className="pass_wrapper">
            <label htmlFor="">
                Password
                <input name="pass" type="password"/>
            </label>
        </div>
    );
}