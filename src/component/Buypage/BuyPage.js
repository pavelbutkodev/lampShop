import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom'
import {addOne, getOneProduct} from '../../services/ajaxUser';


import './Buypage.scss';

const BuyPage = (props) => {
  const [error, setError] = useState(null)
  const {id} = useParams()
  const textInput = useRef(null);

  const [createElem, setCreateElem] = useState(null)
  const removeOneCard = useCallback(
    (data) => {
      addOne(data, props.total)
        .then(data => {
          setCreateElem(data)
          props.render()
        })
        .catch(e => console.log('==========>e', e))
      setCreateElem(data)
    }, [])

  let handleCheckItemInLocalHost = (e) => {
    if (0){
      setError(null);
    } else {
      e.preventDefault();
      removeOneCard(product.productId)
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
  useEffect(()=>{
    getOneProdCall()
  }, [])

  if(product){
  return (
    <div className="buypage_wrapper">
      <div className="top_content">
        <div className="img_left">
          <img src={product.img} alt=""/>
        </div>
        <div className="info_price">
          <div className="price_name">{product.name}</div>
          <div className="price_many">${product.price}</div>
          <div className="price_text">id: {product.id}</div>
          <div className="send_add">
            <input type="text" ref={textInput}/>
            <button className="price_btn" onClick={handleCheckItemInLocalHost}>Add to Cart</button>
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
      <div className="about_lamp">
        About this product <br/><br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquam aliquid architecto asperiores
        beatae consequuntur distinctio eligendi esse laboriosam laborum modi odio, optio, placeat rem
        repudiandae? Ab blanditiis excepturi quam.
      </div>
    </div>
  );
  } else {
    return null
  }

}

export default BuyPage;