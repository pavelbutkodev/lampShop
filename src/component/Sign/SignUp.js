import React, {useCallback, useState} from 'react';

import InputForm from './InputForm';
import Btnform from './ButtonForm';

import './Sign.scss';
import {login} from '../../services/ajaxUser';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const getApiCall = useCallback(
    (data) => {
      login(data)
        .then((response) => {
          console.log('==========>response', response)
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
      <InputForm value={form.email} onChange={(e) => handleInputChange(e, 'email')} name={'Email'} type={'email'}/>
      <InputForm value={form.password} onChange={(e) => handleInputChange(e, 'password')} name={'Password'} type={'password'}/>
      <Btnform name="Login" onClick={() => handleLoginClick()}/>
    </div>
  )
};

export default SignUp;