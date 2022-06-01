import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import '../react-slider.scss'
import PizzaRegina from "../../../../assets/images/tabsfoodsimages/pizzablack/pizzareginablack.jpg"
import PizzaCalabria from "../../../../assets/images/tabsfoodsimages/pizzablack/pizzacalabriablack.jpg"
import PizzaFunghi from "../../../../assets/images/tabsfoodsimages/pizzablack/pizzafunghiblack.jpg"
import PizzaFormaggi from "../../../../assets/images/tabsfoodsimages/pizzablack/pizzaformaggiblack.jpg"
import PizzaVesuvio from "../../../../assets/images/tabsfoodsimages/pizzablack/pizzavesuvioblack.jpg"
import PizzaMargherita from "../../../../assets/images/tabsfoodsimages/pizzablack/pizzamargheritablack.jpg"
import PizzaPepperoni from "../../../../assets/images/tabsfoodsimages/pizzablack/pizzapepperoniblack.webp"
import PizzaBlanca from '../../../../assets/images/tabsfoodsimages/pizzablack/pizzablancablack.webp'
import PizzaCarne from '../../../../assets/images/tabsfoodsimages/pizzablack/pizzacarneblack.webp'
import PizzaMilano from '../../../../assets/images/tabsfoodsimages/pizzablack/Pizzamilano.jpg'
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

export default function Pizza({selectedCategory}) {

    const [modal, setModal] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(false);
    const [pizza, setPizza] = useState([
        {
              id: 1,
              image:PizzaBlanca,
              name: 'Pizza Blanca',
              description: 'A hamburger made using beef from Angus cattle.',
              price: '$13.99',
              category: 'chicken',
          },
          {
              id: 2,
              image:PizzaCalabria,
              name: 'Pizza Calabria',
              description: 'Popular regional hamburger ingredients in Australia',
              price: '$13.99',
              category: 'spicy',
          },
          {
              id: 3,
              image:PizzaFunghi,
              name: 'Pizza Funghi',
              description: 'dfjhfghfghfgh',
              price: '$13.99',
              category: 'spicy',
          },
          {
              id: 4,
              image: PizzaFormaggi,
              name: 'Pizza Formaggi',
              description: 'sdfgdhfgjh fghdfd',
              price: '$13.99',
              category: 'chicken',
          },
          {
              id: 5,
              image: PizzaVesuvio,
              name: 'Pizza Vesuvio',
              description: 'dfgdffbjfh',
              price: '$13.99',
              category: 'spicy',
          },
          {
              id: 6,
              image: PizzaMargherita,
              name: 'Pizza Margherita',
              description: 'fgdg dfgdfg',
              price: '$13.99',
              category: 'meat',
          },
          {
              id: 7,
              image: PizzaPepperoni,
              name: 'Pizza Pepperoni',
              description: 'fgdg dfgdfg',
              price: '$13.99',
              category: 'spicy',
          },
        {
              id: 8,
              image: PizzaRegina,
              name: 'Pizza Regina',
              description: 'fgdg dfgdfg',
              price: '$13.99',
              category: 'meat',
        },
        {
              id: 9,
              image: PizzaCarne,
              name: 'Pizza Carne',
              description: 'fgdg dfgdfg',
              price: '$13.99',
              category: 'fish',
        },
        {
              id: 10,
              image: PizzaMilano,
              name: 'Pizza Milano',
              description: 'fgdg dfgdfg',
              price: '$13.99',
              category: 'fish',
        },
    ])

    const [filteredPizza, setFilteredPizza] = useState([]);

    useEffect(() => {
        if(selectedCategory === 'all') {
            setFilteredPizza(pizza);
        } else {
            setFilteredPizza(pizza.filter(b => b.category === selectedCategory))
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
        setSelectedPizza(item)
        }

    return (
        <>
        <div className="slider">
            <div className="slider__container">
                <Slider {...settings}>
                    {filteredPizza.map(item => {
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
        </div>
        {modal && (
            <div className="dialog" onClick={() => setModal(false)}>
                <div className="dialog__container">
                    <img
                        className="dialog__image"
                        src={selectedPizza.image}
                        alt={selectedPizza.name}
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
