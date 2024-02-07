import React from 'react'
import './Popular.css'
// import data_product from '../assets/data'
import Item from '../Item/Item'

const Popular = (props) => {
  // console.log(props)
  return (
    <div className='propular_product'>
      <div className="heading">
        <h1>{props.heading}</h1>
        <span className='line'></span>
      </div>
        <div className="card">
            {props.product.map((item, index) =>{
                return <Item key={index} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} name={item.name} />
            })}
        </div>
    </div>
  )
}

export default Popular
