import React, {Component, createElement} from 'react';

export default function Nameform () {
    return (
        <div className="name_wrapper">
                <label htmlFor="">
                    Name
                    <input name="name" type="text"/>
                </label>
        </div>
    );
}