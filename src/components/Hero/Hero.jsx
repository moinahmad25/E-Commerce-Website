import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_img from '../assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero_section'>
            <div className="hero_left">
                <div className="div">
                    <div className="hero_title">
                        <h3>New Arrivals only</h3>
                    </div>
                    <div className="hero_desc">
                        <div className="part_1">
                            <h1>New</h1>
                            <img src={hand_icon} alt="" />
                        </div>
                        <div className="part_2">
                            <h1>collection</h1>
                            <h1>for everyone</h1>
                        </div>
                    </div>
                    <button className='latest_btn'>
                        Latest Collection
                        <img src={arrow_icon} alt="" />
                    </button>
                </div>
            </div>
            <div className="hero_right">
                <img src={hero_img} alt="" />
            </div>
        </div>
    )
}

export default Hero
