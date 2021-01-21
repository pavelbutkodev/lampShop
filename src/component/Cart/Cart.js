import React, {useEffect, useState} from 'react';

import './Cart.scss';
import close from '../../img/33.png'

const Cart = (props) => {
  console.log('==========>123113312321', props)
  return (
    <div className="cart_wrapper">
      <div className="top_content">
        <div className="img_left">
          <img src={props.img} alt=""/>
        </div>
        <div className="info_price">
          <div className="price_name">{props.name}</div>
          <div className="price_many">{props.total}x ${props.price}</div>
          <div className="price_text">Some more information goes here</div>
          <button className="price_btn"><img src={close} alt=""/></button>
        </div>
      </div>
    </div>
  );
}

export default Cart;