import React, {useEffect, useState} from 'react';

import Cart from './Cart';

const CartRender = (props) => {
  return props.cards && props.cards.length > 0 && props.cards.map(({name, price, image, total, id}, index) => {
    return (
      <Cart
        name={name}
        price={price}
        image={image}
        total={total}
        key={index}
        id={id}
        onRemove={() => {
          localStorage.setItem('cart', JSON.stringify(props.cards.filter((card, inx) => inx !== index)))
        }}
      />
    )
  })
}

export default CartRender;