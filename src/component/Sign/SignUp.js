import React, {useCallback, useState} from 'react';

import InputForm from './InputForm';
import Btnform from './ButtonForm';
import {registration} from '../../services/ajaxUser';

import './Sign.scss';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const getApiCall = useCallback(
    (data) => {
      registration(data)
        .then((response) => {
          console.log('==========>response', response)
        })
        .catch((e) => {
          console.log('==========>e', e)
        })
    }, [])

  const handleRegisterClick = () => {
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
      <h2>Create an account</h2>
      <div className="wrapper_form">
        <InputForm value={form.name}
                   onChange={(e) => handleInputChange(e, 'name')}
                   name={'Name'}
                   type={'text'}/>
        <InputForm value={form.email}
                   onChange={(e) => handleInputChange(e, 'email')}
                   name={'Email'}
                   type={'email'}/>
        <InputForm value={form.password}
                   onChange={(e) => handleInputChange(e, 'password')}
                   name={'Password'}
                   type={'password'}/>
        <Btnform onClick={() => handleRegisterClick()} name="Register"/>
      </div>
    </div>
  );
}

export default SignUp;