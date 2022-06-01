import React, { useState, useEffect } from 'react'
import Slider from "react-slick"
import '../react-slider.scss'
import Singapore from "../../../../assets/images/tabsfoodsimages/noodlesblack/singaporenoodlesblack.jpg"
import Shanghai from "../../../../assets/images/tabsfoodsimages/noodlesblack/shanghainoodles.jpg"
import Japanese from "../../../../assets/images/tabsfoodsimages/noodlesblack/japanesenoodlesblack.jpg"
import Chicken from "../../../../assets/images/tabsfoodsimages/noodlesblack/chickennoodlesblack.jpg"
import Sichuan from "../../../../assets/images/tabsfoodsimages/noodlesblack/sichuannoodlesblack.jpg"
import SearchIcon from "../../../../assets/images/search.svg";
import CloseIcon from "../../../../assets/images/close-icon.svg";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,background: "#000",display:'block',borderRadius:'50%' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,display:'block',backgroundColor:'#000',borderRadius:'50%'}}
            onClick={onClick}
        />
    );
}



export default function Noodles({selectedCategory}) {

    const [modal, setModal] = useState(false);
    const [selectedNoodles, setSelectedNoodles] = useState(null);
    const [noodles, setNoodles] = useState([
        {
            id: 1,
            image: Singapore,
            name: 'Singapore Noodles',
            description: 'A hamburger made using beef from Angus cattle.',
            price: '$22.99',
            category: 'spicy',
        },
          {
            id: 2,
            image: Shanghai,
            name: 'Shanghai Noodles',
            description: 'Popular regional hamburger ingredients in Australia',
            price: '$17.99',
              category: 'chicken',
          },
          {
            id: 3,
            image: Japanese,
            name: 'Japanese noodles',
            description: 'dfjhfghfghfgh',
            price: '$24.99',
              category: 'chicken',
          },
          {
            id: 4,
            image: Chicken,
            name: 'Chicken Noodles',
            description: 'sdfgdhfgjh fghdfd',
            price: '$18.99',
              category: 'spicy',
          },
          {
            id: 5,
            image: Sichuan,
            name: 'Sichuan Noodles',
            description: 'dfgdffbjfh',
            price: '$14.99',
              category: 'fish',
          },
    ])

    const [filteredNoodles, setFilteredNoodles] = useState([]);

    useEffect(() => {
        if(selectedCategory === 'all') {
            setFilteredNoodles(noodles);
        } else {
            setFilteredNoodles(noodles.filter(b => b.category === selectedCategory))
        }
    }, [selectedCategory])

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const toggle = (item) => {
        setModal(!modal)
        setSelectedNoodles(item)
        }

    return (
        <>
        <div className="slider">
            <Slider {...settings}>
                {filteredNoodles.map(item => {
                    return (
                        <div className="slider__content">
                            <div className="slider__image">
                                <img src={item.image} />
                                <div className="clickSearch">
                                    <span
                                        className="clickSearch__icon"
                                        onClick={() => toggle(item)}
                                    >
                                        <i className="fas fa-search"></i>
                                    </span>

                                    <span className="clickSearch__icon">
                                        <i className="fas fa-heart"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="slider__info">
                                <div className="slider__row">
                                    <a href="#" className="slider__row-title">
                                        {item.name}
                                    </a>
                                </div>
                                <div className="slider__row-text">
                                    <p className="slider__row-paragraph">
                                        Buffalo burgers have less
                                        cholesterol and less fat
                                    </p>
                                </div>
                                <div className="slider__row-more">
                                            <span className="slider__row-addFirst">

                                            </span>
                                    <span className="slider__row-addSecond">

                                            </span>
                                </div>
                                <span className="slider__row-price">
                                            {item.price}
                                        </span>
                                <button type="button" className="slider__btn">
                                    <i className="cart fas fa-shopping-bag"></i>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>


        {modal && (
            <div className="dialog" onClick={() => setModal(false)}>
                <div className="dialog__container">
                    <img
                        className="dialog__image"
                        src={selectedNoodles.image}
                        alt={selectedNoodles.name}
                    />
                </div>

                <div className="dialog__icons">
                        <span className="dialog__icons-search">
                            <img src={SearchIcon} alt={SearchIcon} />
                        </span>
                    <span className="dialog__icons-close">
                            <img src={CloseIcon} alt={CloseIcon} />
                        </span>
                </div>
            </div>

         )}
        </>
    )
}
