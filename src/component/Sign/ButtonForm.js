import React from 'react';

const Btnform = (props) => (
  <div className="btn_wrapper">
      <button className="btn" {...props}>{props.name}</button>
  </div>
);

export default Btnform;