import React from 'react'
import { useSelector } from 'react-redux'

import Product from './Product/Product'

import './productlist.css'

function ProductList() {
    const productsList = useSelector((state) => state.cartReducer).products

    return (
        <div className="product-list">
            {
                productsList.map((product, index) => {
                    return (
                        <div className="product-list__item" key={index}>
                            <Product product={product} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList