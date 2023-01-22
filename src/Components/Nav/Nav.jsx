import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { goToCart, goToHome } from "../../actions/navActions"

import "./navbar.css"

function Nav() {
    const productsList = useSelector((state) => state.cartReducer)
    const navReducer = useSelector((state) => state.navReducer)

    const dispatch = useDispatch()
    return (
        <div className="navbar">
            {
                navReducer.home ? (
                    <>
                        <div className="navbar__items">GameZone</div>
                        <div className="navbar__items right" onClick={productsList.itemsInCart.length > 0 ? () => dispatch(goToCart()) : null}>Cart - {productsList.itemsInCart.length} Items</div>
                    </>
                ) : (
                    <>
                        <div className="navbar__items">Cart</div>
                        <div className="navbar__items right" onClick={() => dispatch(goToHome())}>Go Back Home</div>
                    </>
                )
            }
        </div>
    );
}

export default Nav;
