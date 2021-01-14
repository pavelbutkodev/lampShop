import React from 'react';

import Emailform from './Emailform';
import Passform from './Passform';
import Btnform from './Buttonform';

import './Sign.scss';

const Signin = () => (
    <div className="sign_wrapper">
        <h2>Log in your account</h2>
        <form action="">
            <Emailform />
            <Passform />
            <Btnform name="Login"/>
        </form>
    </div>
);

export default Signin;