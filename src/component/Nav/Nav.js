import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
    Link,useHistory
} from 'react-router-dom';

import Heart from '../Heart/Heart';
import Card from '../Card/Card';
import Signin from '../Sign/Signin';
import Signup from '../Sign/Signup';
import Cart from '../Cart/Cart';
import CartFooter from '../Cart/CartFooter';
import Buypage from '../Buypage/Buypage';


import './Nav.scss';
import menu from '../../img/menu.svg';

const Nav = (props) => {
    const [menuActive, setMenuActive] = useState('false')
    const handleClickNavigationButton = () => {
        setMenuActive(!menuActive)
        // setMenuActive((prevState)=>{return !prevState})
        // myRef.classList.toggle('menu_active');
    };

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
            <div className={menuActive ? 'menu_active_none' : 'menu_active'} >
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
                        <Route  path="/page/:id/">
                            <Buypage />
                        </Route>
                        <Route  path="/starter/">
                            <Heart/>
                            <div className="wrapper_main">
                                {props.lamps.map(({name, price, image, id}, index) => {
                                    return (
                                        <div  key={id}>
                                            <Card
                                                id={id}
                                                text={name}
                                                cost={price}
                                                img={image}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </Route>
                        <Route  path="/signin">
                            <Signin/>
                        </Route>
                        <Route  path="/signup">
                            <Signup/>
                        </Route>
                        <Route  path="/cart">
                            {props.lamps.map(({name, price, image}, index) => {
                                return <Cart
                                    name={name}
                                    price={price}
                                    image={image}
                                    key={index}
c                                />
                            })}
                            <CartFooter price={props.lamps[0].price}/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default Nav;