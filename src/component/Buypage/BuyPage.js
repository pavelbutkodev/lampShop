import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom'

import {addOne, getOneProduct} from '../../services/ajaxUser';

import './Buypage.scss';

const BuyPage = (props) => {
  const [error, setError] = useState(null)
  const {id} = useParams()
  const textInput = useRef(null);

  const setCreateElem = useState(null)
  const addOneCard = useCallback(
    (data) => {
      addOne(data, textInput.current.value)
        .then(data => {
          setCreateElem[1](data)
          props.render()
        })
        .catch(e => console.log('==========>e', e))
      setCreateElem[1](data)
    }, [])

  let handleCheckItemInLocalHost = (e) => {
    if (product.total < textInput.current.value) {
      setError(`Error: There is not enough stock to add ${product.name} to you cart`);
    } else {
      e.preventDefault();
      addOneCard(product.productId)
    }
  };

  const [product, setProduct] = useState(null)
  const getOneProdCall = useCallback(
    (data) => {
      getOneProduct(id)
        .then(data => {
          setProduct(data)
        })
        .catch(e => console.log('==========>e', e))
      setProduct(data)
    }, [])
  useEffect(() => {
    getOneProdCall()
  }, [])

  if (product) {
    return (
      <div className="buypage_wrapper">
        <div className="top_content">
          <div className="img_left">
            <img src={product.img} alt=""/>
          </div>
          <div className="info_price">
            <div className="price_name">{product.name}</div>
            <div className="price_many">${product.price}.00</div>
            <div className="price_text">id: {product.productId}</div>
            <div className="send_add">
              <input type="text" ref={textInput}/>
              <button className="price_btn" onClick={handleCheckItemInLocalHost}>Add to Cart</button>
              {error && <div className="error">{error}</div>}
            </div>
          </div>
        </div>
        <div className="about_lamp">
          <h3>About this product</h3>
          <p>This adjustable table lamp comes in matt black with a striking copper detail. It has a good, sturdy
            construction and is adjustable. It will add a funky and contemporary feel to any room.
          </p>
        </div>
      </div>
    );
  } else {
    return null
  }
}

export default BuyPage;