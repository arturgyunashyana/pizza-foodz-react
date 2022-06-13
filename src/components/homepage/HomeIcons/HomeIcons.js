import React, { useState } from 'react'
import './homeicons.scss'

export default function HomeIcons () {

    const [ element ] = useState([

        {
            photo: "https://parkofideas.com/foodz/demo/wp-content/uploads/2019/04/demo-3003282827.svg",
            title: '60 min Delivery',
            description: 'Blowzy red vixens fight for a quick jump',
        },
        {
            photo: "https://parkofideas.com/foodz/demo/wp-content/uploads/2019/04/demo-3003373925.svg",
            title: 'Best Shefs',
            description: 'The quick, brown fox jumps over a lazy dog',
        },
        {
            photo: "https://parkofideas.com/foodz/demo/wp-content/uploads/2019/04/demo-3003117828.svg",
            title: 'Fresh Ingredients',
            description: 'My faxed joke won a pager in the cable TV quiz show',
        },
    ])

    return (
        <div className="homeIcons">
            <div className="homeIcons__container">
                <div className="homeIcons__info">
                    {element.map(item => {
                        return (
                                <div className="homeIcons__content">
                                    <img className="homeIcons__photo"
                                         src={item.photo}
                                         alt="image"
                                    />
                                    <span className="homeIcons__title">
                                        {item.title}
                                    </span>
                                    <p className="homeIcons__description">
                                        {item.description}
                                    </p>
                                </div>
                            )
                    })}
                </div>
            </div>
        </div>
    )
}
