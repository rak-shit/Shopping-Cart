import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { removeProductFromCartComplete } from '../../actions/cartActions'

import './cart.css'

function Cart() {
    const productsList = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()

    function handleRemoveItemFromCart(product) {
        dispatch(removeProductFromCartComplete(product))
    }

    return (
        <div className="cart__container">
            {
                productsList.itemsInCart.map((cartItem, index) => {
                    return (
                        <div className="cart__container__flex" key={index}>
                            <div className="cart__container__flex-item">
                                <button className="cart__container__flex-item-remove-button" onClick={() => handleRemoveItemFromCart(cartItem)}>Remove From Cart</button>
                            </div>
                            <div style={{ flexBasis: '30%' }} className="cart__container__flex-item">
                                <div>
                                    <img className="cart__container__flex-item-image" src={cartItem.image} alt={cartItem.description} />
                                </div>
                                <div style={{ marginTop: '16px' }}>
                                    {cartItem.description}
                                </div>
                            </div>
                            <div className="cart__container__flex-item">
                                Quantity: {cartItem.count}
                            </div>
                            <div className="cart__container__flex-item">
                                Price: ${cartItem.price}
                            </div>
                            <div className="cart__container__flex-item">
                                Price: ${cartItem.price * cartItem.count}
                            </div>
                        </div>
                    )
                })
            }
            {
                productsList.itemsInCart.length === 0 ? (
                    <div>No items in cart. Go back to home and add some items to cart.</div>
                ) : (
                    <div style={{ textAlign: 'right' }}>
                        Total: ${productsList.totalPrice}
                    </div>
                )
            }
        </div>
    )
}

export default Cart