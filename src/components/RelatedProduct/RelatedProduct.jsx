import React from 'react'
import './RelatedProduct.css'
import Item from '../Item/Item'
import data_product from '../assets/data'

const RelatedProduct = () => {
    return (
        <div className='related_body'>
            <div className="related_product">
                <div className="heading">
                    <h1>Related Products</h1>
                    <span className="line"></span>
                </div>
                <div className="product">
                    {data_product.map((item, id) => {
                        return <Item key={id} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} name={item.name} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default RelatedProduct
