import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div>
      <Link to={`/product/${props.id}`}>
        <div onClick={() => window.scrollTo({top:0})} className="item_card">
          <div className="item_img">
            <img src={props.image} alt="" />
          </div>
          <div className="detail">
            <p>{props.name}</p>
            <div className="price_detail">
              <p className="new_price">${props.new_price}</p>
              <p className="old_price">${props.old_price}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Item
