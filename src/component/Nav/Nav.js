import React, {useState, useEffect, useCallback} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';

import Heart from '../Heart/Heart';
import Card from '../Card/Card';
import SignIn from '../Sign/SignIn';
import SignUp from '../Sign/SignUp';
import CartFooter from '../Cart/CartFooter';
import BuyPage from '../Buypage/BuyPage';
import CartRender from '../Cart/CartRender'
import {getAllProduct, getCartToken} from '../../services/ajaxUser';

import './Nav.scss';
import menu from '../../img/menu.svg';
import shop from '../../img/shoping.png'

const Nav = () => {
    const [products, setProducts] = useState(null)
    const [menuActive, setMenuActive] = useState(false)
    const [cartToken, setCartToken] = useState(null)

    const getCartCall = useCallback(
        () => {
            getCartToken()
                .then(data => {
                    setCartToken(data)
                })
        }, [])

    const getProdCall = useCallback(
        () => {
            getAllProduct()
                .then(data => {
                    setProducts(data)
                })
        }, [])

    useEffect(() => {
        getProdCall()
        getCartCall()
    }, [])

    const handleClickNavigationButton = () => {
        setMenuActive(!menuActive)
    };

    return (
        <Router>
            <div className="nav_wrapper">
                <div className="container">
                    <div className="navbar">
                        <div className="left_col">
                            <NavLink
                                to="/starter"
                                className="nav_link starter"
                                exact
                                activeClassName="active"
                            >
                                <img alt="heart"
                                     className="headImg"
                                     src="data:image/svg+xml;base64,PHN2ZyBpZD0iYWxsLWxvZ29zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzE1LjA3Njg1IDMzNy44MTk1Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjE0MS4xMDEwOSIgeTE9IjEyMS44OTQyMSIgeDI9IjE2MS45OTk4NSIgeTI9IjIwNC43MTUyMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC4wMTA5MyIgc3RvcC1jb2xvcj0iI2U2NzQxNyIvPjxzdG9wIG9mZnNldD0iMC45OTk1MiIgc3RvcC1jb2xvcj0iI2U2MmYxNyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJOZXdfR3JhZGllbnRfU3dhdGNoIiB4MT0iMTU3LjUzNTA1IiB5MT0iMTQ2LjA4MjE0IiB4Mj0iMTU3LjUzNTA1IiB5Mj0iMjQ0Ljc2MTYxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjJiYjMwIi8+PHN0b3Agb2Zmc2V0PSIwLjMwOTA1IiBzdG9wLWNvbG9yPSIjZTY3NDE3Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTYyZjE3Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iMTk1LjU5NTA1IiB5MT0iMTg5LjUzOTU5IiB4Mj0iMjAyLjk3NzQxIiB5Mj0iMTU1LjI2NDM2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU+bGlnaHQtaGV4PC90aXRsZT48cGF0aCBkPSJNMjM2LjMwNzYzLDEyNi40Njc4M2E1LjI1OTMzLDUuMjU5MzMsMCwwLDAtMi42MjczNS00LjU1MzEzbC03My41MTQyMy00Mi40NDNhNS4yNjQyNyw1LjI2NDI3LDAsMCwwLTUuMjU1MjYsMGwtNzMuNTE0MjIsNDIuNDQzYTUuMjU5MzIsNS4yNTkzMiwwLDAsMC0yLjYyNzM2LDQuNTUzMTN2ODQuODg2YTUuMjU1NzQsNS4yNTU3NCwwLDAsMCwyLjYyNzM2LDQuNTUwOTJsNzMuNTE0MjIsNDIuNDQzYTUuMjY0MjEsNS4yNjQyMSwwLDAsMCw1LjI1NTI2LDBsNzMuNTE0MjMtNDIuNDQzYTUuMjU1NzUsNS4yNTU3NSwwLDAsMCwyLjYyNzM1LTQuNTUwOTJaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTkxLjYyNTQzLDIxMC40MTI4MmE1Ljk3MjgzLDUuOTcyODMsMCwwLDEtMi45ODY0MS01LjE3MjYxdi00My4wOTZhNDIuNjUxMTIsNDIuNjUxMTIsMCwwLDEsMi4xNTEzNC0xNC41ODY3N2MyLjUwNjctNi43NjYwOCw3LjQ2NDM3LTEzLjM4NTI5LDE3LjI5MTY0LTE3LjI4OTA1LDE4LjgyOTY3LTcuNDc5ODUsMzcuNDQwMjYsMi42MzMyOCw0Ny45NTQxMSwxNy42MjUyNSw4LjgyODI3LDEyLjU4ODQ1LDEzLjk4MDcxLDE3LjU5MzU0LDI1LjA4MTgsMjYuMDkyLDkuODI5NzgsNy41MjUxNyw0MC42NTc2LDIxLjA1OSw0NS4zMjAxMi01Ljg5OHYzNy4xNTI2YTUuOTcyODIsNS45NzI4MiwwLDAsMS0yLjk4NjQyLDUuMTcyNjFsLTYyLjkyNjY4LDM2LjMzMDc0YTUuOTcyODMsNS45NzI4MywwLDAsMS01Ljk3MjgyLDBaIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz48cGF0aCBkPSJNOTEuNjI1NDMsMjEwLjQxMjgybDYyLjkyNjY4LDM2LjMzMDc0YTUuOTcyODMsNS45NzI4MywwLDAsMCw1Ljk3MjgyLDBsNjIuOTI2NjgtMzYuMzMwNzRhNS45NzI4Miw1Ljk3MjgyLDAsMCwwLDIuOTg2NDItNS4xNzI2MXYtMzcuMTUyNmMwLTI3LjUxOTU5LTMwLjY5NTM3LTI5Ljc5MTU5LTQ2LjUxNS03LjkyMDA3LTEyLjUzODY1LDE3LjMzNTM1LTE4LjA5MjQ5LDIzLjU0Mi0zNC44NzcxLDI5LjY0NTU0LTE5LjY0MzQ0LDcuMTQzMDctMzcuMjc0ODksMy4yNjk3Mi00Ny4zMDIwNi02LjUzOTQ2QTI5Ljg2ODgzLDI5Ljg2ODgzLDAsMCwxLDg4LjYzOSwxNjIuMTQ0MnY0My4wOTZBNS45NzI4Myw1Ljk3MjgzLDAsMCwwLDkxLjYyNTQzLDIxMC40MTI4MloiIGZpbGw9InVybCgjTmV3X0dyYWRpZW50X1N3YXRjaCkiLz48cGF0aCBkPSJNMjI2LjQzOCwxNjguMDg3NjFjMC0yNy41MTk1Ni0zMC42OTUzNy0yOS43OTE2MS00Ni41MTUwOC03LjkyMDA3LTIuMTc2ODEsMy4wMDk2MS00LjE0MDMyLDUuNjc3MTItNS45OTE0NCw4LjA3MzUzLDIuMTM2MSwxLjgxNDQ4LDQuNDg0MTEsMy42NzU4MSw3LjE4NjM4LDUuNzQ0NTRDMTkwLjk0NzY3LDE4MS41MTA3NywyMjEuNzc1NDcsMTk1LjA0NDYyLDIyNi40MzgsMTY4LjA4NzYxWiIgb3BhY2l0eT0iMC4zIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0yKSIvPjwvc3ZnPg=="/>
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
                                <img className="shop_icon" src={shop} alt=""/>
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
                        <Route path="/signup">
                            <SignIn/>
                        </Route>
                        <Route path="/signin">
                            <SignUp/>
                        </Route>
                        <Route path="/cart">
                            <CartRender
                                render={getCartCall}
                                cards={cartToken}
                            />
                            <CartFooter
                                render={getCartCall}
                                price={cartToken && cartToken.length > 0 && cartToken}
                            />
                        </Route>
                        <Route path="/page/:id">
                            <BuyPage
                                render={getCartCall}
                                products={products}
                            />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default Nav;