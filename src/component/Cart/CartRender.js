import React, {useEffect, useState} from 'react';

import Cart from './Cart';

const CartRender = (props) => {

  if(props.cards && props.cards.length > 0){
    return props.cards.map(({name, price, img, total, id}, index) => {
        return (
          <Cart
            name={name}
            price={price}
            img={img}
            total={total}
            key={index}
            id={id}
            onRemove={() => {
              // localStorage.setItem('cart', JSON.stringify(props.cards.filter((card, inx) => inx !== index)))
            }}
          />
        )
      }
    )
  } else return null
}

export default CartRender;