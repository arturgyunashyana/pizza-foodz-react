import React, { useState } from 'react';
import './homepageslider.scss';
import { Carousel } from 'react-carousel-minimal';

function HomePageSlider() {

    const data = [
        {
            image: require("./imgSliderhome/homepage-section1-bg1.jpg"),
            caption: "JAPANESE TEA"
        },
        {
            image: require("./imgSliderhome/homepage-section1-bg2.jpg"),
            caption: "PEPPERONI"
        },
        {
            image: require("./imgSliderhome/homepage-section1-bg3.jpg"),
            caption: "BRUSCHETTAS"
        },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (

        <div className="slider">
            <div className="animate-slider__container-fluid">
                <Carousel
                    data={data}
                    time={10000}
                    width="100%"
                    height="700px"
                    captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        width: "100%",
                    }}
                />
            </div>
        </div>
    )
}

export default HomePageSlider
