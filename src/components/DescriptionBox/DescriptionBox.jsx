import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='description_body'>
            <div className="d_box">
                <div className="btns">
                    <button className="description">Description</button>
                    <button className="review">Review (122)</button>
                </div>
                <div className="desc_box">
                    <p>
                        An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
                    </p>
                    <p>
                        E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g. sizes, colors). Each product usually has its own dedicated page with relevant information.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DescriptionBox
