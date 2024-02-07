import React from 'react'
import './Offer.css';
import exclusive_image from '../assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer'>
      <div className="left">
        <div className="content">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>only on best seller products</p>
            <button>
                Check Now
            </button>
        </div>
      </div>
      <div className="right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offer
