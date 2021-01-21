import React, {useState, useEffect, useCallback} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import Heart from '../Heart/Heart';
import Card from '../Card/Card';
import SignUp from '../Sign/SignUp';
import SignIn from '../Sign/SignIn';
import CartFooter from '../Cart/CartFooter';
import BuyPage from '../Buypage/BuyPage';
import CartRender from '../Cart/CartRender'
import {getAllProduct, getCartToken} from '../../services/ajaxUser';

import './Nav.scss';
import menu from '../../img/menu.svg';

const Nav = () => {

  const [menuActive, setMenuActive] = useState(false)
  const handleClickNavigationButton = () => {
    setMenuActive(!menuActive)
  };

  const [cartToken, setCartToken] = useState(null)
  const getCartCall = useCallback(
    (data) => {
      getCartToken()
        .then(data => {
          setCartToken(data)
        })
        .catch(e => console.log('==========>e', e))
      setCartToken(data)
    }, [])
  
  const [products, setProducts] = useState(null)
  const getProdCall = useCallback(
    (data) => {
      getAllProduct()
        .then(data => {
          setProducts(data)
        })
        .catch(e => console.log('==========>e', e))
      setProducts(data)
    }, [])
  useEffect(()=>{
    getProdCall()
    getCartCall()
  }, [])

  return (
    <Router>
      <div className="nav_wrapper">
        <div className="container">
          <div className="navbar">
            <div className="left_col">
              <NavLink
                to="/starter"
                className="nav_link"
                exact
                activeClassName="active"
              >
                Starter Store
              </NavLink>
            </div>
            <div className="menu">
              <img
                onClick={handleClickNavigationButton}
                className="menuBurger"
                src={menu}
                alt=""
              />
            </div>
            <div className="right_col">
              <NavLink
                to="/signin"
                className="nav_link"
                exact
                activeClassName="active"
              >
                Sign up
              </NavLink>
              <NavLink
                to="/signup"
                className="nav_link"
                exact
                activeClassName="active"
              >
                Sign in
              </NavLink>
              <NavLink
                to="/cart"
                className="nav_link"
                exact
                activeClassName="active"
              >
               Cart ({cartToken && cartToken.length})
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={`two_nav ${menuActive ? '' : 'menu_active_none'} `}>
        <NavLink
          to="/signin"
          className="nav_link"
          exact
          activeClassName="active"
        >
          Sign up
        </NavLink>
        <NavLink
          to="/signup"
          className="nav_link"
          exact
          activeClassName="active"
        >
          Sign in
        </NavLink>
        <NavLink
          to="/cart"
          className="nav_link"
          exact
          activeClassName="active"
        >
          Cart 
        </NavLink>
      </div>
      <div className="promo_wrapper">
        <div className="container">
          <Switch>
            <Route path="/starter/">
              <Heart/>
              <div className="wrapper_main">
                {products && products.length > 0 && products.map(({name, price, img, _id}, key) => {
                  return (
                    <Card
                      key={key}
                      id={_id}
                      text={name}
                      cost={price}
                      img={img}
                    />
                  )
                })}
              </div>
            </Route>
            <Route path="/signin">
              <SignUp/>
            </Route>
            <Route path="/signup">
              <SignIn/>
            </Route>
            <Route path="/cart">
              <CartRender render={getCartCall} cards={cartToken}/>
              <CartFooter render={getCartCall} price={cartToken && cartToken.length > 0 && cartToken}/>
            </Route>
            <Route path="/page/:id">
              <BuyPage render={getCartCall} products={products}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Nav;