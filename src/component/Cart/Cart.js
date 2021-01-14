import React from 'react';

import './Cart.scss';
import close from '../../img/33.png'



const Cart = (props) => (
    <div className="cart_wrapper">
        <div className="top_content">
            <div className="img_left">
                <img src={props.image} alt=""/>
            </div>
            <div className="info_price">
                <div className="price_name">{props.name}</div>
                <div className="price_many">1x ${props.price.toFixed(2)}</div>
                <div className="price_text">Some more information goes here</div>
                <button className="price_btn"><img src={close} alt=""/></button>
            </div>
        </div>
    </div>
);

export default Cart;