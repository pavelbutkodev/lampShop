import React, {useCallback, useState} from 'react';

import {deleteOne} from "../../services/ajaxUser";

import './Cart.scss';
import close from '../../img/33.png'

const Cart = (props) => {
  const setRemove = useState(null)
  const addOneCard = useCallback(
    (data) => {
      deleteOne(data, props.total)
        .then(data => {
          setRemove[1](data)
        })
        .catch(e => console.log('==========>e', e))
      setRemove[1](data)
    }, [])

  const btnRemove = () => {
    addOneCard(props.productId)
    setTimeout(() => {
      props.render()
    }, 500)
  }

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
          <button className="price_btn" onClick={btnRemove}><img src={close} alt=""/></button>
        </div>
      </div>
    </div>
  );
}

export default Cart;