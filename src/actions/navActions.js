import { GO_TO_CART, GO_TO_HOME } from "../types"

export const goToCart = () => {
    return {
        type: GO_TO_CART
    }
}

export const goToHome = () => {
    return {
        type: GO_TO_HOME
    }
}