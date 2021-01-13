import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Heart from "../Heart/Heart";
import './Nav.scss';
import Card from "../Card/Card";
import lamp1 from './img/lamp1.png';

export default function NavBar(){
    return (
        <Router>
            <div className="nav_wrapper">
                <div className="container">
                    <div className="navbar">
                        <div className="left_col">
                            <NavLink to="/starter" className="nav_link" exact activeClassName="active" >Starter Store</NavLink>
                        </div>
                        <div className="right_col">
                            <NavLink to="/signin" className="nav_link" exact activeClassName="active">Sign up</NavLink>
                            <NavLink to="/signup" className="nav_link" exact activeClassName="active">Sign in</NavLink>
                            <NavLink to="/cart" className="nav_link" exact activeClassName="active">Cart</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="promo_wrapper">
                <div className="container">
                    <Switch>
                        <Router path="/starter">
                            <Heart />
                            <div className="wrapper_main">
                                <Card text="Gold" cost="$243.00" img={lamp1}/>
                                <Card text="Gold" cost="$243.00" img={lamp1}/>
                                <Card text="Gold" cost="$243.00" img={lamp1}/>
                                <Card text="Gold" cost="$243.00" img={lamp1}/>
                            </div>
                        </Router>
                        <Router path="/signin">
                            <Heart />
                        </Router>
                        <Router path="/signup">
                            <SignIn/>
                        </Router>
                        <Router path="/cart">
                            <Cart/>
                        </Router>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

function SignUp(){
    return <h2>signup</h2>
}

function SignIn(){
    return <h2>signip</h2>
}

function Cart(){
    return <h2>Cart</h2>
}