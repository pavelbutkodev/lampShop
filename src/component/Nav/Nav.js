import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';

import Heart from '../Heart/Heart';
import Card from '../Card/Card';
import Signin from '../Sign/Signin';
import Signup from '../Sign/Signup';
import Cart from '../Cart/Cart';

import './Nav.scss';
import menu from './img/menu.svg';
import lamp1 from './img/lamp1.png';
import lamp2 from './img/lamp2.png';

const Nav = () => {
    const lamps = [
        {
            name: 'Gold', price: 243.00, image: lamp1
        },
        {
            name: 'Blue Desk', price: 250, image: lamp2
        },
        {
            name: 'Blue Desk', price: 250, image: lamp2
        },
        {
            name: 'Gold', price: 243.00, image: lamp1
        },
    ];

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
                                onClick={burger}
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
            <div className="bottom_col">
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
                        <Router path="/starter">
                            <Heart/>
                            <div className="wrapper_main">
                                {lamps.map(({name, price, image}) => {
                                    return <Card text={name} cost={price} img={image}/>
                                })}
                            </div>
                        </Router>
                        <Router path="/signin">
                            <Signin/>
                        </Router>
                        <Router path="/signup">
                            <Signup/>
                        </Router>
                        <Router path="/cart">
                            <Cart name={lamps[0].name} price={lamps[0].price} image={lamps[0].image}/>
                        </Router>
                    </Switch>
                </div>
            </div>
        </Router>
    );

    function burger() {
        document.querySelector('.bottom_col').classList.toggle('menu_active');
    };
};

export default Nav;