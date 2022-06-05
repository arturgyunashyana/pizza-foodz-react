import React, { useState } from 'react';
import './homepageslider.scss';
import dataSlider from "./dataSlider";
import BtnSlider from "./btnSlider";
import OrderRedBtn from "../../../common/orderredbtn/OrderRedBtn";

function HomePageSlider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }


    return (

        <div className="animate-slider">
            {dataSlider.map((obj, id) => {
                return (
                    <div
                             key={obj.id}
                             className={
                             slideIndex === id + 1 ?
                            "slide active-anim" : "slide"
                            }
                    >
                        <img
                            className="animate-slider__fon"
                            src={`imgSlider/homepage-section1-bg${id + 1}.jpg`}
                            alt='section-bg'
                        />
                                <div className="animate-slider__blog">
                                    <div className="animate-slider__container">
                                        <img src={obj.img} alt='img' />
                                        <h1 className="animate-slider__title">
                                            {obj.title}
                                        </h1>
                                        <h1 className="animate-slider__subtitle">
                                            {obj.subtitle}
                                        </h1>
                                        <OrderRedBtn />
                                    </div>
                                </div>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>
    )
}

export default HomePageSlider
