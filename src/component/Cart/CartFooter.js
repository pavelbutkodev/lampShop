import React, {useEffect, useState} from 'react';

import './CartFooter.scss';

const CartFooter = () => {
  const [price, setPrice] = useState(0);

  return (
    <div className="footer_wrapper">
      <div className="footer_content">
        <div className="sum_price">
          <span>Sub total:</span> ${price}
        </div>
        <div className="btn_finish">
          <button>Check out</button>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;