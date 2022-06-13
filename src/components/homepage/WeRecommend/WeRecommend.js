import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import './werecommed.scss'
import VegetableRoll from '../../../assets/images/tabsfoodsimages/sushiblack/sushivegetablerollblack.jpg';
import JapaneseNoodlesBlack from "../../../assets/images/tabsfoodsimages/noodlesblack/japanesenoodlesblack.jpg";
import ChiliBurgerBlack from "../../../assets/images/tabsfoodsimages/burgers/chiliburgerblack.jpg";
import SushiDinamiteRoll from "../../../assets/images/tabsfoodsimages/sushiblack/sushidinamiterollblack.jpg";
import SlugBurger from "../../../assets/images/tabsfoodsimages/burgers/slugburgerblack.jpg";
import SpicyTunnaRoll from "../../../assets/images/tabsfoodsimages/sushiblack/sushispicytunarollblack.jpg";
import RedPepper from "../../../assets/images/redpepper.svg";
import DoubleBuffaloBurger from "../../../assets/images/tabsfoodsimages/burgers/doublebuffaloburgerblack.jpg";
import SearchIcon from "../../../assets/images/search.svg";
import CloseIcon from "../../../assets/images/close-icon.svg";

export default function WeRecommend () {

    const [modal, setModal] = useState(false);
    const [selectedRecommend, setSelectedRecommend] = useState(false);
    const [weRecommend, setWeRecommend] = useState([

        {
            id: 1,
            image: VegetableRoll,
            name: 'Vegetable Roll',
            description: 'Cucumber, fresh carrot, scallion, avocado',
            price: '$3.99',
            category: 'spicy',
            add: 'standart',
            task: 'Big'
        },
        {
            id: 2,
            image: JapaneseNoodlesBlack,
            name: 'Japanese noodles',
            description: 'Japanese udon noodles with salmon fish',
            price: '$8.99',
            category: 'chicken',
            add: 'standart',
            task: 'Big'
        },
        {
            id: 3,
            image: ChiliBurgerBlack,
            name: 'Chili burger',
            description: 'A hamburger served with chicken, chili, lettuce, tomato, and onion',
            price: '$24.99',
            category: 'spicy',
            add: 'standart',
            task: 'Big'
        },
        {
            id: 4,
            image: SushiDinamiteRoll,
            name: 'DYnamite Roll',
            description: 'Shrimp tempura, yellowtail, bean sprouts, carrots',
            price: '$18.99',
            category: 'meat',
            add: 'standart',
            task: 'Big'
        },
        {
            id: 5,
            image: SlugBurger,
            name: 'Slug burger',
            description: 'Served on a bun with mustard, pickles, onion, and French fries',
            price: '$14.99',
            category: 'chicken',
            add: 'standart',
            task: 'Big'
        },
        {
            id: 6,
            image: SpicyTunnaRoll,
            name: 'Spicy tunna Roll',
            img: RedPepper,
            description: 'Tuna, mayo, chili sauce, avocado, carrot',
            price: '$14.99',
            category: 'fish',
            add: 'standart',
            task: 'Big'
        },
        {
            id: 7,
            image: DoubleBuffaloBurger,
            name: 'Double buffalo burger',
            description: 'Buffalo burgers have less cholesterol and less fat',
            price: '$18.99',
            category: 'meat',
            add: 'standart',
            task: 'Big'
        },
    ])

    const toggle = (item) => {
        setModal(!modal)
        setSelectedRecommend(item)
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <>
        <div className="WeRecommend">
            <div className="WeRecommend__container">
                <h2 className="WeRecommend__title">
                    WE RECOMMEND
                </h2>
                <Carousel breakPoints={breakPoints}>
                    {weRecommend.map(item => {
                        return (
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
                                    <img
                                        className="slider__info-img"
                                    />
                                    <div className="slider__row-text">
                                        <p className="slider__row-paragraph">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="slider__row-more">
                                       <span className="slider__row-addFirst">
                                           {item.add}
                                       </span>
                                        <span className="slider__row-addSecond">
                                           {item.task}
                                       </span>
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
        </div>
    {modal && (
        <div className="dialog" onClick={() => setModal(false)}>
            <div className="dialog__container">
                <img
                    className="dialog__image"
                    src={selectedRecommend.image}
                    alt={selectedRecommend.name}
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
