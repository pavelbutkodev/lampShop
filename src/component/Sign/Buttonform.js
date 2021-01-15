import React from 'react';

const Btnform = (props) => (
  <div className="btn_wrapper">
    <label htmlFor="">
      <button className="btn">{props.name}</button>
    </label>
  </div>
);

export default Btnform;