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

    const moveDot = index => {
        setSlideIndex(index)
    }



    return (
        <div className="animate-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            className="animate-slider-fon"
                            src={`imgSlider/homepage-section1-bg${index + 1}.jpg`}
                        />
                                <div className="animate-slider-blog">
                                    <div className="imgtextcontainer">
                                        <img src={obj.img} alt='img' />
                                        <h1 className="setinfo2">{obj.title}</h1>
                                        <h1 className="setinfo3">{obj.subtitle}</h1>
                                        <OrderRedBtn />
                                    </div>
                                </div>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default HomePageSlider
