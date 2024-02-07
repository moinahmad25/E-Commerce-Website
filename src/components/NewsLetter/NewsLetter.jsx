import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className="news_letter">
            <h1>Get exclusive offer on you email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div className="input_field">
                <input type="text" placeholder='Your Email Id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
