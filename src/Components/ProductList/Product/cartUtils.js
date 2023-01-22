export const isAlreadyAddedtoCart = (cart, presentProduct) => {
    for (let i=0; i<cart.length; i++) {
        if (cart[i].id === presentProduct.id) {
            return true
        }
    }
    return false
}

export const getCountFromStore = (cart, presentProduct) => {
    for (let i=0; i<cart.length; i++) {
        if (cart[i].id === presentProduct.id) {
            return cart[i].count
        }
    }
}