import { ADD_ITEMS_TO_CART, REMOVE_ITEMS_FROM_CART, REMOVE_ITEMS_FROM_CART_COMPLETE } from "../types"

const initialState = {
    products: [
        {
            id: 1,
            description: "PlayStation PS5 bundle, God of war. Ragnarock",
            price: 549,
            image: "https://m.media-amazon.com/images/I/61SUJDrCTLL._AC_UL640_QL65_.jpg",
            ratings: 4
        },
        {
            id: 2,
            description: "Nintendo Switch with Neon Blue and Neon Red",
            price: 229,
            image: "https://m.media-amazon.com/images/I/61nfFrm5NcL._AC_UL640_QL65_.jpg",
            ratings: 1
        },
        {
            id: 3,
            description: "Hogwarts Legacy - Deluxe Edition, PS5",
            price: 79,
            image: "https://m.media-amazon.com/images/I/8152oqdos7L._AC_UL640_QL65_.jpg",
            ratings: 4
        },
        {
            id: 4,
            description: "PlayStation 5 console",
            price: 449,
            image: "https://m.media-amazon.com/images/I/51eOztNdCkL._AC_UL640_QL65_.jpg",
            ratings: 2
        },
        {
            id: 5,
            description: "Dual Shock 4 - Wireless controller PS4",
            price: 58,
            image: "https://m.media-amazon.com/images/I/61IG46p-yHL._AC_UL640_QL65_.jpg",
            ratings: 5
        },
        {
            id: 6,
            description: "Xbox Series X",
            price: 849,
            image: "https://m.media-amazon.com/images/I/61JGKhqxHxL._AC_UL640_QL65_.jpg",
            ratings: 3
        }
    ],
    itemsInCart: [],
    totalPrice: 0
}

const calculateTotal = (cart) => {
    return cart.reduce((acc, cur) => {
        return acc = acc + cur.count * cur.price
    }, 0)
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEMS_TO_CART: {
            const previousCart = [...state.itemsInCart]
            const itemToBeAdded = { ...action.payload }
            const existingIndex = previousCart.findIndex(item => item.id === itemToBeAdded.id)

            if (existingIndex > -1) {
                let countOfExistingItem  = previousCart[existingIndex].count
                previousCart.splice(existingIndex, 1)
                previousCart.splice(existingIndex, 0, {...action.payload, count: countOfExistingItem + 1})

                const totalPrice = calculateTotal(previousCart)
                return {
                    ...state,
                    itemsInCart: previousCart,
                    totalPrice
                }
            }
            const totalPrice = calculateTotal([...previousCart, {...action.payload, count: 1}])
            return {
                ...state,
                itemsInCart: [...previousCart, {...action.payload, count: 1}],
                totalPrice
            }
        }
        case REMOVE_ITEMS_FROM_CART: {
            const previousCart = [...state.itemsInCart]
            const itemToBeRemoved = { ...action.payload }
            const existingIndex = previousCart.findIndex(item => item.id === itemToBeRemoved.id)

            let countOfExistingItem  = previousCart[existingIndex].count
            previousCart.splice(existingIndex, 1)
            if (countOfExistingItem === 1) {
                const totalPrice = calculateTotal(previousCart)
                return {
                    ...state,
                    itemsInCart: previousCart,
                    totalPrice
                }
            }
            previousCart.splice(existingIndex, 0, {...action.payload, count: countOfExistingItem - 1})
            const totalPrice = calculateTotal(previousCart)
            return {
                ...state,
                itemsInCart: previousCart,
                totalPrice
            }
        }
        case REMOVE_ITEMS_FROM_CART_COMPLETE: {
            const previousCart = [...state.itemsInCart]
            const itemToBeRemoved = { ...action.payload }
            const existingIndex = previousCart.findIndex(item => item.id === itemToBeRemoved.id)

            previousCart.splice(existingIndex, 1)
            const totalPrice = calculateTotal(previousCart)
            return {
                ...state,
                itemsInCart: previousCart,
                totalPrice
            }
        }
        default: {
            return state
        }
    }
} 
