import { ADD_ITEMS_TO_CART, REMOVE_ITEMS_FROM_CART, REMOVE_ITEMS_FROM_CART_COMPLETE } from "../types"

export const addProductToCart = (data) => {
    return {
        type: ADD_ITEMS_TO_CART,
        payload: data
    }
}

export const removeProductFromCart = (data) => {
    return {
        type: REMOVE_ITEMS_FROM_CART,
        payload: data
    }
}

export const removeProductFromCartComplete = (data) => {
    return {
        type: REMOVE_ITEMS_FROM_CART_COMPLETE,
        payload: data
    }
}