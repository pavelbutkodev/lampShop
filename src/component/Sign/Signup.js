import React from 'react';

import Nameform from './Nameform';
import Emailform from './Emailform';
import Passform from './Passform';
import Btnform from './Buttonform';

import './Sign.scss';

const Signup = () => (
  <div className="sign_wrapper">
    <h2>Create an account</h2>
    <form action="">
      <Nameform/>
      <Emailform/>
      <Passform/>
      <Btnform name="Register"/>
    </form>
  </div>
);

export default Signup;