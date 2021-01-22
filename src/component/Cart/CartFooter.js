import React, {useCallback, useEffect} from 'react';

import {checkOut} from '../../services/ajaxUser';

import './CartFooter.scss';

const CartFooter = (props) => {
    const checkCall = useCallback(
      (data) => {
        checkOut(data)
          .then(data => {
          })
          .catch(e => console.log('==========>e', e))
      }, [])
    const checkOutClick = () => {
      checkCall(props.productId)
      props.render()
    }

    useEffect(() => {
      props.render()
    }, [])

    return (
      <div className="footer_wrapper">
        <div className="footer_content">
          <div className="sum_price">
            <span>Sub total:</span> $ 0
          </div>
          <div className="btn_finish">
            <button onClick={checkOutClick}>Check out</button>
          </div>
        </div>
      </div>
    );
  }
;

export default CartFooter;