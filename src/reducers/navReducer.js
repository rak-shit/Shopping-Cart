import { GO_TO_CART, GO_TO_HOME } from "../types"

const initialValue = {
    home: true
}

export const navReducer = (state = initialValue, action) => {
    switch(action.type) {
        case GO_TO_CART: {
            return {
                home: false
            }
        }
        case GO_TO_HOME: {
            return {
                home: true
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}