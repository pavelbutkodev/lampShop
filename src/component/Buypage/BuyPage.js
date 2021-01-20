import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom'
import {getOneProduct} from '../../services/ajaxUser';


import './Buypage.scss';

const BuyPage = (props) => {
  const [error, setError] = useState(null)
  const {id} = useParams()
  // const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') )|| [])
  const textInput = useRef(null);
  // let path = Number(window.location.pathname.split('/')[2]);
  // let lamps = JSON.parse(localStorage.getItem('lamps'));
  // useEffect(()=>{
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }, [cart])
  //
  let handleCheckItemInLocalHost = () => {
  //   if (textInput.current.value <= lamps[path].total && textInput.current.value !== ''){
  //     setError(null);
  //     lamps[path].total = lamps[path].total - textInput.current.value;
  //     localStorage.setItem('lamps', JSON.stringify(lamps));
  //
  //     setCart(cart.concat([
  //         {
  //           id: lamps[path].id,
  //           total: textInput.current.value,
  //           name: lamps[path].name,
  //           image: lamps[path].image,
  //           price: lamps[path].price
  //         }
  //       ])
  //     )
  //   } else {
  //     setError(`Error: There is not enough stock to add ${lamps[path].name} to you cart`)
  //   }
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
  console.log('==========>product1232123', product)

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