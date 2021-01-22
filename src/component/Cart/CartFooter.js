import React, {useCallback, useEffect} from 'react';

import {checkOut} from '../../services/ajaxUser';

import './CartFooter.scss';

const CartFooter = (props) => {
    const checkCall = useCallback(
      (data) => {
        checkOut(data)
      }, [])

   const checkOutClick = async () => {
      checkCall(props.productId)
      await props.render()
    }

    useEffect(() => {
      props.render()
    }, [])


    if (props.price) {
      const players = props.price;
      let age = players.reduce((sum, player) => (+sum + +player.price) * +player.total, 0);
      localStorage.setItem('total', age)
    } else {
      localStorage.setItem('total', 0);
    }

    return (
      <div className="footer_wrapper">
        <div className="footer_content">
          <div className="sum_price">
            <span>Sub total:</span> ${localStorage.getItem('total')}.00
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