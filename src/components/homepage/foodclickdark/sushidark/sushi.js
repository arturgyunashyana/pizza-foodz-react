import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import '../react-slider.scss'
import ClickSearch from "../../../../common/divspani/ClickSearch";
import SpiderRoll from "../../../../assets/images/tabsfoodsimages/sushiblack/sushispiderrollblack.jpg"
import DragonRoll from "../../../../assets/images/tabsfoodsimages/sushiblack/sushidragonrollblack.jpg"
import ShrimpTempuraRoll from "../../../../assets/images/tabsfoodsimages/sushiblack/sushishrimptempuraroll.webp"
import SpicyTunaRoll from "../../../../assets/images/tabsfoodsimages/sushiblack/sushispicytunarollblack.jpg"
import CaterpillarRoll from "../../../../assets/images/tabsfoodsimages/sushiblack/sushicaterpilarrollblack.jpg"
import CrunchRoll from "../../../../assets/images/tabsfoodsimages/sushiblack/sushicrunchrollblack.webp"
import VegetableRoll from '../../../../assets/images/tabsfoodsimages/sushiblack/sushivegetablerollblack.jpg'
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



export default function Sushi({selectedCategory}) {

    const [modal, setModal] = useState(false);
    const [selectedSushi, setSelectedSushi] = useState(null);
    const [sushi, setSushi] = useState([
        {
            id: 1,
            image: SpiderRoll,
            name: 'Spider Roll',
            description: 'A hamburger made using beef from Angus cattle.',
            price: '$22.99',
            category: 'chicken',
          },
          {
            id: 2,
            image: DragonRoll,
            name: 'Dragon Roll',
            description: 'Popular regional hamburger ingredients in Australia',
            price: '$17.99',
              category: 'spicy',
          },
          {
            id: 3,
            image: ShrimpTempuraRoll,
            name: 'Tempura Roll',
            description: 'dfjhfghfghfgh',
            price: '$24.99',
              category: 'spicy',
          },
          {
            id: 4,
            image: SpicyTunaRoll,
            name: 'Spicy Tuna Roll',
            description: 'sdfgdhfgjh fghdfd',
            price: '$18.99',
              category: 'chicken',
          },
          {
            id: 5,
            image: CaterpillarRoll,
            name: 'Caterpillar Roll',
            description: 'dfgdffbjfh',
            price: '$14.99',
              category: 'spicy',
          },
          {
            id: 6,
            image: CrunchRoll,
            name: 'Crunch Roll',
            description: 'fgdg dfgdfg',
            price: '$14.99',
              category: 'meat',
          },
          {
            id: 7,
            image: VegetableRoll,
            name: 'Vegetable Roll',
            description: 'fgdg dfgdfg',
            price: '$18.99',
              category: 'fish',
          },
    ])

    const [filteredSushi, setFilteredSushi] = useState([]);

    useEffect(() => {
        if(selectedCategory === 'all') {
            setFilteredSushi(sushi);
        } else {
            setFilteredSushi(sushi.filter(b => b.category === selectedCategory))
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
        setSelectedSushi(item)
        }



    return (
        <>
        <div className="slider">
            <Slider {...settings}>
                {filteredSushi.map(item => {
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
                        src={selectedSushi.image}
                        alt={selectedSushi.name}
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
