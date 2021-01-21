import React from 'react';

import "./Heart.scss";
import HeartImg from '../../img/heart.svg';

const Heart = () => (
  <div className="img">
    <img
      className="i_lamp_img"
      src={HeartImg}
      alt="lamp"
    />
  </div>
);

export default Heart;