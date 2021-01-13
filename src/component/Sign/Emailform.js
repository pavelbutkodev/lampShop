import React, {Component, createElement} from 'react';

export default function Emailform () {
    return (
        <div className="email_wrapper">
            <label htmlFor="">
                Email
                <input name="email" type="email"/>
            </label>
        </div>
    );
}