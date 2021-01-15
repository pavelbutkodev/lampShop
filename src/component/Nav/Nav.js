import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import Heart from '../Heart/Heart';
import Card from '../Card/Card';
import Signin from '../Sign/Signin';
import Signup from '../Sign/Signup';
import CartFooter from '../Cart/CartFooter';
import Buypage from '../Buypage/Buypage';
import CartRender from '../Cart/CartRender'

import './Nav.scss';
import menu from '../../img/menu.svg';

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false)
  const handleClickNavigationButton = () => {
    setMenuActive(!menuActive)
    // setMenuActive((prevState)=>{return !prevState})
    // myRef.classList.toggle('menu_active');
  };
  const [state, setState] = useState(null);
  const cards = JSON.parse(localStorage.getItem('cart'));

  useEffect(() => {
    setTimeout(() => {
      setState(JSON.parse(localStorage.getItem('lamps')));
    })
  }, []);

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
                Cart
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
                {state && state.length > 0 && state.map(({name, price, image, id}) => {
                  return (
                    <Card
                      key={id}
                      id={id}
                      text={name}
                      cost={price}
                      img={image}
                    />
                  )
                })}
              </div>
            </Route>
            <Route path="/signin">
              <Signin/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/cart">
              <CartRender cards={cards}/>
              <CartFooter price={state && state.length > 0 && state[0].price}/>
            </Route>
            <Route path="/page/:id/">
              <Buypage/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Nav;