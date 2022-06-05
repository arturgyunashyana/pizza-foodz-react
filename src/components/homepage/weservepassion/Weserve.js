import React, { useState } from 'react';
import Carousel from "react-elastic-carousel";
import './weserve.scss';
import '../foodclickdark/react-slider.scss'
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

export default function Weserve() {

    const [modal, setModal] = useState(false);
    const [selectedBurger, setSelectedBurger] = useState(false);
    const [pizza, setPizza] = useState([
          {
            id: 1,
            image: PizzaBlanca,
            fon: GreenSheet,
            name: 'Pizza Bianca',
            description: 'Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary',
            price: '$8.99',
            number1: '25cm',
              number2: '30cm',
              number3: '35cm',
              task1: 'thick',
              task2: 'thin'
          },
          {
            id: 2,
            image: PizzaVesuvio,
            name: 'Pizza Vesuvio',
            description: 'Tomato Sauce · Mozzarella · Pepperoni · Mixed Peppers · Green Chillies · Cracked Chillies',
            price: '$14.99',
              number1: '25cm',
              number2: '30cm',
              number3: '35cm',
              task1: 'thick',
              task2: 'thin'
          },
          {
            id: 3,
            image: PizzaFormaggi,
            name: 'Pizza Formaggi',
            description: 'Tomato Sauce · Mozzarella · Parmesan · Mascarpone · Gorgonzola',
            price: '$9.99',
              number1: '25cm',
              number2: '30cm',
              number3: '35cm',
              task1: 'thick',
              task2: 'thin'
          },
          {
            id: 4,
            image: PizzaCarne,
            name: 'Pizza Carne',
            description: 'Tomato Sauce · Mozzarella · Chicken · Beef · Pepperoni · Onions · Rosemary',
            price: '$11.99',
              number1: '25cm',
              number2: '30cm',
              number3: '35cm',
              task1: 'thick',
              task2: 'thin'
          },
          {
            id: 5,
            image: PizzaCalabria,
            fon: RedPepper,
            name: 'Pizza Calabria',
            description: 'Tomato Sauce · Mozzarella · Mascarpone · Nduja Spicy Sausage · Rocket',
            price: '$20.99',
              number1: '25cm',
              number2: '30cm',
              number3: '35cm',
              task1: 'thick',
              task2: 'thin'
          },
          {
            id: 6,
            image: PizzaFunghi,
            fon: GreenSheet,
            name: 'Pizza Funghi',
            description: 'Tomato Sauce · Mozzarella · Mushrooms · Thyme',
            price: '$4.99',
              number1: '25cm',
              number2: '30cm',
              number3: '35cm',
              task1: 'thick',
              task2: 'thin'
          },
    ])

    const toggle = (item) => {
        setModal(!modal)
        setSelectedBurger(item)
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <>
        <div className="weServe">
        <div className="weServe__container">
            <div className="weServe__contentFirst">
                <div className="weServe__item">
                    <img
                         className="weServe__item-fon"
                         src={BorderFon}
                         alt="border-fon"
                    />
                </div>
                <div className="weServe__item-img">
                    <img className='item-img-rak' src={Rak} />
                </div>
                <div className="weServe__fon-text">
                    <img className='textFon' src={TextFon} alt="text-fon" />
                </div>
            </div>

            <div className="weServe__contentSecond">
                <h1 className="weServe__title">WE SERVE PASSION</h1>
                <Carousel breakPoints={breakPoints}>
                    {pizza.map(item => {
                        return(
                            <div className="slider__content">
                                <div className="slider__info">
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

                                    <div className="slider__row">
                                        <a href="#" className="slider__row-title">
                                            {item.name}
                                        </a>
                                    </div>
                                    <div className="slider__row-text">
                                        <p className="slider__row-paragraph">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="slider__row-more">
                                        <div className="slider__row-more-tasks">
                                            <span className="slider__row-addFirst">
                                                {item.task1}
                                            </span>

                                            <span className="slider__row-addSecond">
                                                {item.task2}
                                            </span>
                                        </div>

                                        <div className="slider__row-more-tasks">
                                            <span className="slider__row-addFirst">
                                                  {item.number1}
                                            </span>

                                            <span className="slider__row-addSecond">
                                                  {item.number2}
                                            </span>

                                            <span className="slider__row-addSecond">
                                                  {item.number3}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="slider__row-price">
                                        {item.price}
                                    </span>
                                    <div className="slider__submit">
                                        <button type="button" className="slider__btn">
                                            <i className="cart fas fa-shopping-bag"></i>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
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
