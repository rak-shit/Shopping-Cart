import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from './reducers/cartReducer'
import { navReducer } from './reducers/navReducer'

export default configureStore({
    reducer: {
        cartReducer: cartReducer,
        navReducer: navReducer
    }
})