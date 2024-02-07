import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { productItems } from '../../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(productItems)
    return (
        <div className="p_body">
            <div className='product_display'>
                <div className="p_1">
                    <img src={product.image} className='p_img' alt="" />
                    <img src={product.image} className='p_img' alt="" />
                    <img src={product.image} className='p_img' alt="" />
                    <img src={product.image} className='p_img' alt="" />
                </div>
                <div className="p_2">
                    <img src={product.image} alt="" className='d_img' />

                </div>
                <div className="p_3">
                    <h1>{product.name}</h1>
                    <div className="star">
                        <img src={star_icon} alt="" className='s_icon' />
                        <img src={star_icon} alt="" className='s_icon' />
                        <img src={star_icon} alt="" className='s_icon' />
                        <img src={star_icon} alt="" className='s_icon' />
                        <img src={star_dull_icon} alt="" className='s_icon' />
                        <p>(122)</p>
                    </div>
                    <div className="price">
                        <h3 className="old_price">${product.old_price}</h3>
                        <h3 className="new_price">${product.new_price}</h3>
                    </div>
                    <p className="desc">
                        A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
                    </p>
                    <div className="size">
                        <h3 className="s_heading">Select Size</h3>
                        <button className="size_btn">S</button>
                        <button className="size_btn">M</button>
                        <button className="size_btn">L</button>
                        <button className="size_btn">XL</button>
                        <button className="size_btn">XXL</button>
                    </div>
                    <button className='cart_btn' onClick={() => {addToCart(product.id)}}>Add To Cart</button>
                    <div className="category">
                        <p className="cat"><span>Category: </span>{product.category}, T-Shirt, Crop Top</p>
                        <p className="tag"><span>Tags: </span>Modern, Latest</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDisplay
