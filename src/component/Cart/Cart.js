import React from 'react';

import './Cart.scss';

const Cart = (props) => (
    <div className="cart_wrapper">
        <div className="top_content">
            <div className="img_left">
                <img src={props.image} alt=""/>
            </div>
            <div className="info_price">
                {props.name}
                1x${props.price}
                Some more information goes here
                <button>Btn</button>
            </div>
        </div>
        <div className="footer_content">
            <div className="summ_price">
                Sub total: {props.price}
            </div>
            <div className="btn_finish">
                <button>Btn</button>
            </div>
        </div>
    </div>
);

export default Cart;