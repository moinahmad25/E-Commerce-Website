import React from 'react'
import './BreadCrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

const BreadCrum = (props) => {
  const { product } = props
  return (
    <div className='bread'>
      <div className='bread_crum'>
        <p>Home <img src={arrow_icon} alt="arrow" /> Shop <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /><span> {product.name}</span></p>
      </div>
    </div>
  )
}

export default BreadCrum
