import React, {Component, createElement} from 'react';
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
import lamp2 from './img/lamp2.png';
import menu from './img/menu.svg';

export default function NavBar(){
    const lamps = [
        {
            name:'Gold',price:243.00, image:lamp1
        } ,
        {
            name:'Blue Desk',price:250, image:lamp2
        } ,
        {
            name:'Blue Desk',price:250, image:lamp2
        } ,
        {
            name:'Gold',price:243.00, image:lamp1
        },
    ]
    return (
        <Router>
            <div className="nav_wrapper">
                <div className="container">
                    <div className="navbar">
                        <div className="left_col">
                            <NavLink to="/starter" className="nav_link" exact activeClassName="active" >Starter Store</NavLink>
                        </div>
                        <div className="menu">
                            <img onClick={burger} className="menuBurger" src={menu} alt=""/>
                        </div>
                        <div className="right_col">
                            <NavLink to="/signin" className="nav_link" exact activeClassName="active">Sign up</NavLink>
                            <NavLink to="/signup" className="nav_link" exact activeClassName="active">Sign in</NavLink>
                            <NavLink to="/cart" className="nav_link" exact activeClassName="active">Cart</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_col">
                <NavLink to="/signin" className="nav_link" exact activeClassName="active">Sign up</NavLink>
                <NavLink to="/signup" className="nav_link" exact activeClassName="active">Sign in</NavLink>
                <NavLink to="/cart" className="nav_link" exact activeClassName="active">Cart</NavLink>
            </div>
            <div className="promo_wrapper">
                <div className="container">
                    <Switch>
                        <Router path="/starter">
                            <Heart />
                            <div className="wrapper_main">
                                {lamps.map(({name,price,image})=>{
                                   return <Card text={name} cost={price} img={image}/>
                                })}
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

function burger(){
    document.querySelector('.bottom_col').classList.toggle('menu_active');
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