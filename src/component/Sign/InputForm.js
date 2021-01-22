import React from 'react';

const InputForm = (props) => (
  <div className="input_wrapper">
    <label>
      {props.name}
      <input {...props}/>
    </label>
  </div>
);

export default InputForm;