import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../assets/cart_cross_icon.png'
import { productItems } from '../../context/ShopContext'

const CartItems = () => {
    const { all_product, cartItem, removeFromCart, addToCart, deleteCart, calculatePrice } = useContext(productItems);
    return (
        <div className='cartitem_body'>
            <div className="cover">
                <div className="item_heading">
                    <p>Products</p>
                    <p className='title'>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <div className="parent">
                    {all_product.map((item, index) => {
                        if (cartItem[item.id] > 0) {
                            return (
                                <div key={index} className="product item_heading">
                                    <img src={item.image} alt="" className="pro_img" />
                                    <p className="pro_title">{item.name}</p>
                                    <p className="pro_price">${item.new_price}</p>
                                    <div className="add_remove">
                                        <button className="remove" onClick={() => { removeFromCart(item.id) }}>-</button>
                                        <p className="pro_quantity">{cartItem[item.id]}</p>
                                        <button className="remove" onClick={() => { addToCart(item.id) }}>+</button>
                                    </div>
                                    <p className="total_price">${item.new_price * cartItem[item.id]}</p>
                                    <img src={remove_icon} alt="" onClick={() => { deleteCart(item.id) }} className="remove_icon" />
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="total_price_part">
                    <div className="cart_total_left">
                        <h1 className='total'>Cart Total</h1>
                        <div className="cal">
                            <div className="subtotal">
                                <p>Subtotal</p>
                                <p>${calculatePrice()}</p>
                            </div>
                            <div className="subtotal">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <div className="final">
                                <p>Total</p>
                                <p>${calculatePrice()}</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart_total_right">
                        <p>If you have a promo code, Enter it here</p>
                        <div className="inputs">
                            <input type="text" placeholder='Promo Code' className="promo" />
                            <button className="apply">Apply</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems
