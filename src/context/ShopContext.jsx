import React, { useState } from 'react'
import all_product from '../components/assets/all_product'
import { createContext } from 'react'

export const productItems = createContext(null)

const defaultCart = () => {
  const cart = {};
  for (let i = 0; i < all_product.length+1; i++) {
    cart[i] = 0;
  }
  return cart;
}

const ShopContext = (props) => {
  const [cartItem, setCartItem] = useState(defaultCart());
  
  const addToCart = (productId) =>{
    setCartItem((prevCartData) => ({...prevCartData, [productId]: prevCartData[productId] + 1}))
    // console.log(cartItem)
  }
  
  const removeFromCart = (productId) =>{
    setCartItem((prevCartData) => ({...prevCartData, [productId]: prevCartData[productId] - 1}))
  }

  const deleteCart = (productId) =>{
    setCartItem((prevCartData) => ({...prevCartData,[productId]: 0}))
  }

  const calculatePrice = () =>{
    let totalAmout = 0;
    for(const item in cartItem){
      if(cartItem[item] > 0){
        let productItem = all_product.find((product) => product.id === Number(item))
        totalAmout += productItem.new_price * cartItem[item]
      }
    }
    return totalAmout;
  }

  const totalItem = () => {
    let totalCount = 0;
    for(const item in cartItem){
      if(cartItem[item] > 0){
        // let countingProduct = all_product.find((product) => product.id === Number(item));
        totalCount += cartItem[item]
      }
    }
    // console.log(totalCount)
    return totalCount;
  }
  
  
  const products = { all_product, cartItem, addToCart, removeFromCart, deleteCart, calculatePrice, totalItem }
  // console.log(products)
  return (
    <div>
      <productItems.Provider value={products}>
        {props.children}
      </productItems.Provider>
    </div>
  )
}

export default ShopContext
