import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import insta_logo from '../assets/instagram_icon.png'
import pinterest_logo from '../assets/pintester_icon.png'
import wapp_logo from '../assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="shop_name">
                <img src={logo} alt="" />
                <h1>Shopkart.</h1>
            </div>
            <ul className="list1">
                <li>company</li>
                <li>products</li>
                <li>offices</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            <div className="social_handles">
                <button>
                    <img src={insta_logo} alt="" />
                </button>
                <button>
                    <img src={pinterest_logo} alt="" />
                </button>
                <button>
                    <img src={wapp_logo} alt="" />
                </button>
            </div>
            <div className="line1"></div>
            <p className='copyright'>Copyright © 2024 - All Right Reserved.</p>
        </div>
    )
}

export default Footer
