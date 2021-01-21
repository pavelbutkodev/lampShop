import React, {useCallback, useRef, useState} from 'react';

import './Cart.scss';
import close from '../../img/33.png'
import {deleteOne} from "../../services/ajaxUser";

const Cart = (props) => {
  console.log('==========>propsdfwerqerqrweerq', props.total)
  const textInput = useRef(null);

  const [remove, setRemove] = useState(null)
  const addOneCard = useCallback(
    (data) => {
      deleteOne(data, props.total)
        .then(data => {
          setRemove(data)
        })
        .catch(e => console.log('==========>e', e))
      setRemove(data)
    }, [])

  const btnRemove = () => {
    addOneCard(props.productId)
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
          <button className="price_btn" ref={textInput} onClick={btnRemove}><img src={close} alt=""/></button>
        </div>
      </div>
    </div>
  );
}

export default Cart;