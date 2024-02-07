import React, { useContext } from 'react'
import { productItems } from '../context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/Item/Item'
import './CSS/ShopCategory.css'


const ShopCategory = (props) => {
  const { all_product } = useContext(productItems)

  return (
    <div className='shop_category'>
      <div className="banner">
        <img src={props.banner} alt="" />
      </div>
      <div className="info">
        <p>
          <span>Show 1-12</span> out of 36 products
        </p>
        <div className="sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop_item">
        {all_product.map((item, id) => {
          // console.log(item, " ", id)
          if (item.category === props.category) {
            return <Item key={id} id={id+1} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null
          }
        })}
      </div>
      <div className="load_more">
        <button className='text'>Explore More</button>
      </div>

    </div>
  )
}

export default ShopCategory
