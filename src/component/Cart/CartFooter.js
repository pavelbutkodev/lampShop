import React from 'react';

import './CartFooter.scss';
import close from '../Nav/img/33.png'

const CartFooter = (props) => {
    return (
        <div className="footer_wrapper">
            <div className="footer_content">
                <div className="sum_price">
                    <span>Sub total:</span> ${props.price.toFixed(2)}
                </div>
                <div className="btn_finish">
                    <button>Check out</button>
                </div>
            </div>
        </div>
    );
};

export default CartFooter;