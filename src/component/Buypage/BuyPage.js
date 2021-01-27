import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom'

import {addOne, getOneProduct} from '../../services/ajaxUser';

import './Buypage.scss';

const BuyPage = (props) => {
  const [error, setError] = useState(null)
  const [product, setProduct] = useState(null)
  const setCreateElem = useState(null)

  const {id} = useParams()

  const textInput = useRef(null);

  const addOneCard = useCallback(
    (data) => {
      addOne(data, textInput.current.value)
        .then(data => {
          setCreateElem[1](data)
          props.render()
        })
      setCreateElem[1](data)
    }, [])

  const getOneProdCall = useCallback(
    () => {
      getOneProduct(id)
        .then(data => {
          setProduct(data)
        })
    }, [])

  useEffect(() => {
    getOneProdCall()
  }, [])

  let handleCheckItemInLocalHost = (e) => {
    if (product.total <= 0 || product.total < textInput.current.value || textInput.current.value <= 0) {
      setError(`Error: There is not enough stock to add ${product.name} to you cart left ${product.total}`);
    } else {
      e.preventDefault();
      addOneCard(product.productId)
      setError(null)
      setTimeout(() => {
        getOneProdCall()
      }, 500)
    }
  };

  if (product) {
    const NAME = product.name;
    const PRICE = `$${product.price}.00`;
    const PRODUCT_ID = `SKU: ${product.productId}`
    const ABOUT = product.about;
    return (
      <div className="buypage_wrapper">
        <div className="top_content">
          <div className="img_left">
            <img src={product.img} alt=""/>
          </div>
          <div className="info_price">
            <div className="price_name">{NAME}</div>
            <div className="price_many">{PRICE}</div>
            <div className="price_text">{PRODUCT_ID}, {product.total}</div>
            <div className="send_add">
              <input type="text" ref={textInput}/>
              <button className="price_btn" onClick={handleCheckItemInLocalHost}>Add to Cart</button>
              {error && <div className="error">{error}</div>}
            </div>
          </div>
        </div>
        <div className="about_lamp">
          <h3>About this product</h3>
          <p>{ABOUT}</p>
        </div>
      </div>
    );
  } else {
    return null
  }
}

export default BuyPage;