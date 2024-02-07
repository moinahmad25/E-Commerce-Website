import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { productItems } from '../../context/ShopContext';

const Navbar = () => {
    const {totalItem} = useContext(productItems)
    // console.log(totalItem())
    const [listState, setListState] = useState("shop")

    return (
        <div className='nav-body'>
            <div className="logo-name">
                <img src={logo} alt="logo" />
                <Link style={{ textDecoration: 'none' }} to='/'>
                    <h2>SHOPKART.</h2>
                </Link>
            </div>
            <ul className="list">
                <Link style={{ textDecoration: 'none' }} to='/'>
                    <li onClick={() => { setListState("shop") }} style={listState === "shop" ? { borderBottom: '2px solid gray', color: 'gray', fontWeight: '500' } : { borderBottom: 'none', color: 'rgb(150, 150, 150)', fontWeight: '400' }}>Shop</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/men'>
                    <li onClick={() => { setListState("men") }} style={listState === "men" ? { borderBottom: '2px solid gray', color: 'gray', fontWeight: '500' } : { borderBottom: 'none', color: 'rgb(150, 150, 150)', fontWeight: '400' }}>Men</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/women'>
                    <li onClick={() => { setListState("women") }} style={listState === "women" ? { borderBottom: '2px solid gray', color: 'gray', fontWeight: '500' } : { borderBottom: 'none', color: 'rgb(150, 150, 150)', fontWeight: '400' }}>Women</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/kid'>
                    <li onClick={() => { setListState("kid") }} style={listState === "kid" ? { borderBottom: '2px solid gray', color: 'gray', fontWeight: '500' } : { borderBottom: 'none', color: 'rgb(150, 150, 150)', fontWeight: '400' }}>Kid</li>
                </Link>
            </ul>
            <div className="cart-sign">
                <Link style={{ textDecoration: 'none' }} to='/signin'>
                    <button>Login</button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/cart'>
                    <img src={cart_icon} style={{ height: '2rem' }} alt="cart_icon" />
                </Link>
                <div className="product_count">{totalItem()}</div>
            </div>
        </div>
    )
}

export default Navbar
