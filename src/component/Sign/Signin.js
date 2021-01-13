import React, {Component, createElement} from 'react';
import Emailform from "./Emailform";
import Passform from "./Passform";
import './Sign.scss';
import Btnform from "./Buttonform";


export default function Signin () {
    return (
        <div className="sign_wrapper">
            <h2>Log in your account</h2>
            <form action="">
                <Emailform />
                <Passform />
                <Btnform name="Login"/>
            </form>
        </div>
    );
}