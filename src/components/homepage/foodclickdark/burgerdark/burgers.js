import React, { useEffect, useState } from 'react'
import Carousel from "react-elastic-carousel";
import '../react-slider.scss'
import BuffaloBurger from "../../../../assets/images/tabsfoodsimages/burgers/buffaloburgerblack.jpg";
import DoubleSlugBurger from "../../../../assets/images/tabsfoodsimages/burgers/doubleslugburgerblack.jpg";
import AngusBurger from "../../../../assets/images/tabsfoodsimages/burgers/angusburgerblack.jpg";
import AussieBurger from "../../../../assets/images/tabsfoodsimages/burgers/aussieburgerblack.jpg";
import ChiliBurger from "../../../../assets/images/tabsfoodsimages/burgers/chiliburgerblack.jpg";
import CaliforniaBurger from "../../../../assets/images/tabsfoodsimages/burgers/californiaburgerblack.jpg";
import RedPepper from "../../../../assets/images/redpepper.svg";
import DoubleBuffaloBurger from "../../../../assets/images/tabsfoodsimages/burgers/doublebuffaloburgerblack.jpg";
import SearchIcon from "../../../../assets/images/search.svg";
import CloseIcon from "../../../../assets/images/close-icon.svg";


export default function Burgers({selectedCategory}) {

    const [modal, setModal] = useState(false);
    const [selectedBurger, setSelectedBurger] = useState(false);
    const [filteredBurger, setFilteredBurger] = useState([]);
    const [burger, setBurger] = useState([
        {
            id: 1,
            image: BuffaloBurger,
            name: 'Buffalo burger',
            description: 'Buffalo burgers have less cholesterol and less fat',
            price: '$22.99',
            category: 'spicy',
            add: 'standart',
            task: 'Big'
        },
        {
            id: 2,
            image: DoubleSlugBurger,
            name: 'Double slugburger',
            description: 'Served on a bun with mustard, pickles, onion, and French fries',
            price: '$17.99',
            category: 'chicken',
            add: 'standart',
            task: 'Big'
        },
        {
            id: 3,
            image: AngusBurger,
            name: 'Angus burger',
            description: 'A hamburger made using beef from Angus cattle.',
            price: '$24.99',
            category: 'spicy',
            add: 'standart',
            task: 'Big'
        },
        {
            id: 4,
            image: AussieBurger,
            name: 'Aussie burger',
            description: 'Popular regional hamburger ingredients in Australia',
            price: '$18.99',
            category: 'meat',
            add: 'standart',
            task: 'Big'
        },
        {
            id: 5,
            image: ChiliBurger,
            name: 'Chili burger',
            description: 'A hamburger served with chicken, chili, lettuce, tomato, and onion',
            price: '$14.99',
            category: 'chicken',
            add: 'standart',
            task: 'Big'
        },
        {
            id: 6,
            image: CaliforniaBurger,
            name: 'California burger',
            img: RedPepper,
            description: 'A hamburger served with chicken, lettuce, tomato, and onion',
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

    useEffect(() => {
        if(selectedCategory === 'all') {
            setFilteredBurger(burger);
        } else {
            setFilteredBurger(burger.filter(b => b.category === selectedCategory))
        }
    }, [selectedCategory])

    const toggle = (item) => {
        setModal(!modal)
        setSelectedBurger(item)
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 },
    ]

    return (
        <>
        <div className='slider'>
           <div className="slider__container">
               <Carousel breakPoints={breakPoints}>
                   {filteredBurger.map(item => {
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
    </>
    )
}
