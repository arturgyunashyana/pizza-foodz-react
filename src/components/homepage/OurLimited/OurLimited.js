import React, { useState } from 'react'
import './ourlimited.scss'
import { Parallax } from 'react-parallax'
import OurLimitedFon from '../../../assets/images/our-limited.webp'

export default function OurLimited () {

    const [limited, setLimited] = useState([
        {count: 0, text: 'DAY'},
        {count: 0, price: 0, text: 'HR'},
        {count: 0, price: 0, text: 'MIN'},
        {count: 0, price: 0, text: 'SEC'},
    ])

    return (
        <Parallax
            bgImage={OurLimitedFon}
            strength={200}
        >
            <div className="OurLimited">
                <div className="OurLimited__container">
                   <div className="OurLimited__content">
                       <div className="OurLimited__item">
                           <div className="OurLimited__row">
                               {limited.map(item => {
                                   return (
                                       <span className="OurLimited__box">
                                           <span className="OurLimited__count">
                                               {item.count}{item.price}
                                           </span>
                                           <span className="OurLimited__text">
                                               {item.text}
                                           </span>
                                       </span>
                                   )
                               })}
                           </div>
                           <div className="OurLimited__title">
                               OUR LIMITED OFFER
                           </div>
                           <div className="OurLimited__description">
                               BUY 3 PIZZA GET 1 FOR FREE
                           </div>
                           <div className="OurLimited__more">
                               <a href="#" className="OurLimited__link">
                                   READ MORE
                               </a>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </Parallax>
    )
}
