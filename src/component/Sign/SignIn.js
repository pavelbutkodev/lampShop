import React, {useCallback, useState} from 'react';

import InputForm from './InputForm';
import Btnform from './ButtonForm';
import {login} from '../../services/ajaxUser';

import './Sign.scss';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const getApiCall = useCallback(
    (data) => {
      login(data)
        .then((response) => {
          console.log(response.token)
          localStorage.setItem('token', response.token);
        })
        .catch((e) => {
          console.log('==========>e', e)
        })
    }, [])

  const handleLoginClick = () => {
    getApiCall(form)
  }

  const handleInputChange = (event, trigger) => {
    setForm((prevState) => (
      {
        ...prevState,
        [trigger]: event.target.value
      }
    ))
  }

  return (
    <div className="sign_wrapper">
      <h2>Log in your account</h2>
      <div className="wrapper_form">
        <InputForm value={form.email} onChange={(e) => handleInputChange(e, 'email')} name={'Email'} type={'email'}/>
        <InputForm value={form.password} onChange={(e) => handleInputChange(e, 'password')} name={'Password'}
                   type={'password'}/>
        <Btnform name="Login" onClick={() => handleLoginClick()}/>
      </div>
    </div>
  )
};

export default SignUp;