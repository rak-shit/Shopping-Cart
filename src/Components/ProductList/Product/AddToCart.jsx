import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addProductToCart, removeProductFromCart } from '../../../actions/cartActions'
import { getCountFromStore, isAlreadyAddedtoCart } from './cartUtils'

import './product.css'

function AddToCart({product}) {
    const cartItems = useSelector((state) => state.cartReducer).itemsInCart
    const dispatch = useDispatch()

    function handleAddToCart() {
        dispatch(addProductToCart(product))
    }

    function handleRemoveOneFromCart() {
        dispatch(removeProductFromCart(product))
    }

    return (
        <div className="product-addtocart">
            { 
                isAlreadyAddedtoCart(cartItems, product) ? (
                    <div className="product-item__countcontainer">
                        <button className="product-addtocart-button" onClick={handleRemoveOneFromCart}>-</button>
                        <input className="product__cartcount" value={getCountFromStore(cartItems, product)} readOnly />
                        <button className="product-addtocart-button" onClick={handleAddToCart}>+</button>
                    </div>
                ) : (
                    <button className="product-addtocart-button" onClick={handleAddToCart}>Add to cart</button>
                )
            }
        </div>
    )
}

export default React.memo(AddToCart)