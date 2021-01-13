import React, {Component, createElement} from 'react';
import Nameform from "./Nameform";
import Emailform from "./Emailform";
import Passform from "./Passform";
import './Sign.scss';
import Btnform from "./Buttonform";
export default function Signup () {
    return (
        <div className="sign_wrapper">
            <h2>Create an account</h2>
            <form action="">
                <Nameform />
                <Emailform />
                <Passform />
                <Btnform name="Register"/>
            </form>
        </div>
    );
}