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
import {getAllProduct} from '../../services/ajaxUser';

import './Nav.scss';
import menu from '../../img/menu.svg';

const Nav = () => {

  const [menuActive, setMenuActive] = useState(false)
  const handleClickNavigationButton = () => {
    setMenuActive(!menuActive)
    // setMenuActive((prevState)=>{return !prevState})
    // myRef.classList.toggle('menu_active');
  };

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
               Cart {0}
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
              <CartRender cards={products}/>
              <CartFooter price={products && products.length > 0 && products[0].price}/>
            </Route>
            <Route path="/page/:id">
              <BuyPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Nav;