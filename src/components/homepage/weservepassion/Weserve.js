import React, { useState } from 'react';
import './weserve.scss';
import '../foodclickdark/react-slider.scss'
import Slider from "react-slick";
import PizzaBlanca from '../../../assets/images/tabsfoodsimages/pizzablack/pizzablancablack.webp'
import PizzaVesuvio from '../../../assets/images/tabsfoodsimages/pizzablack/pizzavesuvioblack.jpg'
import PizzaFormaggi from '../../../assets/images/tabsfoodsimages/pizzablack/pizzaformaggiblack.jpg'
import PizzaCarne from '../../../assets/images/tabsfoodsimages/pizzablack/pizzacarneblack.webp'
import PizzaCalabria from '../../../assets/images/tabsfoodsimages/pizzablack/pizzacalabriablack.jpg'
import PizzaFunghi from '../../../assets/images/tabsfoodsimages/pizzablack/pizzafunghiblack.jpg'
import Rak from '../../../assets/images/Rak.jpg'
import BorderFon from '../../../assets/images/border-fon.webp'
import TextFon from '../../../assets/images/text.webp'
import GreenSheet from '../../../assets/images/greensheet.svg'
import RedPepper from '../../../assets/images/redpepper.svg'
import SearchIcon from "../../../assets/images/search.svg";
import CloseIcon from "../../../assets/images/close-icon.svg";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,background: "#000",display:'none',borderRadius:'50%' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,display:'none',backgroundColor:'#000',borderRadius:'50%'}}
            onClick={onClick}
        />
    );
}


export default function Weserve() {


    const [modal, setModal] = useState(false);
    const [selectedBurger, setSelectedBurger] = useState(false);
    const [pizza, setPizza] = useState([
          {
            id: 1,
            image: PizzaBlanca,
            fon: GreenSheet,
            name: 'Pizza Bianca',
            description: 'A hamburger made using beef from Angus cattle.',
            price: '$8.99',
          },
          {
            id: 2,
            image: PizzaVesuvio,
            name: 'Pizza Vesuvio',
            description: 'Popular regional hamburger ingredients in Australia',
            price: '$14.99',
          },
          {
            id: 3,
            image: PizzaFormaggi,
            name: 'Pizza Formaggi',
            description: 'dfjhfghfghfgh',
            price: '$9.99',
          },
          {
            id: 4,
            image: PizzaCarne,
            name: 'Pizza Carne',
            description: 'sdfgdhfgjh fghdfd',
            price: '$11.99',
          },
          {
            id: 5,
            image: PizzaCalabria,
            fon: RedPepper,
            name: 'Pizza Calabria',
            description: 'dfgdffbjfh',
            price: '$20.99',
          },
          {
            id: 6,
            image: PizzaFunghi,
            fon: GreenSheet,
            name: 'Pizza Funghi',
            description: 'fgdg dfgdfg',
            price: '$4.99',
          },
    ])

    const toggle = (item) => {
        setModal(!modal)
        setSelectedBurger(item)
        }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
        <div className="weServe">
        <div className="weServe__container">
            <div className="weServe__contentFirst">
                <div className="weServe__item">
                    <img
                         class="weServe__item-fon"
                         src={BorderFon}
                         alt="border-fon"
                    />
                </div>
                <div className="weServe__item-img">
                    <img src={Rak} />
                </div>
                <span className="weServe__fon-text">
                    <img src={TextFon} alt="text-fon" />
                </span>
            </div>

            <div className="weServe__contentSecond">
                <h1 className="weServe__title">WE SERVE PASSION</h1>
                <Slider {...settings}>
                    {pizza.map(item => {
                        return(
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
                           src={selectedBurger.image}
                           alt={selectedBurger.name}
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
            </div>
        </div>
        </>
    )
}
