import React, {useEffect, useState} from 'react';

import Cart from './Cart';

const CartRender = (props) => {
  console.log('==========>propsdassssssssssssssssssss', props)
  if (props.cards && props.cards.length > 0) {
    console.log('==========>props.cards', props.cards)
    return props.cards.map(({name, price, img, total, _id, productId}, index) => {
        return (
          <Cart
            name={name}
            price={price}
            img={img}
            total={total}
            key={index}
            id={_id}
            productId={productId}
            render={() => props.render()}
      />
      )
      }
    )
  } else return null
}

export default CartRender;