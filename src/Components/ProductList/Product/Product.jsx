import React from 'react'
import Ratings from '../../Star/Ratings'
import AddToCart from './AddToCart'

import './product.css'

function Product({product}) {
    return (
        <div className="product__container">
            <div className="product__container__image-container">
                <img src={product.image} alt={product.description} className="product__container__image" />
            </div>
            <div className="product__container__desctiption">
                {product.description}
            </div>
            <div className="product__container__price">
                ${product.price}
            </div>
            <div className="product__container__rating">
                <Ratings ratings={product.ratings} />
            </div>
            <div className="product__container__add-to-cart">
                <AddToCart product={product} />
            </div>
        </div>
    )
}

export default React.memo(Product)