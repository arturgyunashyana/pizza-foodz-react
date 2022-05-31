import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import Dialog from "../../../../common/modal/Dialog"
import BuffaloBurger from "../../../../assets/images/tabsfoodsimages/burgers/buffaloburgerblack.jpg"
import DoubleSlugBurger from "../../../../assets/images/tabsfoodsimages/burgers/doubleslugburgerblack.jpg"
import AngusBurger from "../../../../assets/images/tabsfoodsimages/burgers/angusburgerblack.jpg"
import AussieBurger from "../../../../assets/images/tabsfoodsimages/burgers/aussieburgerblack.jpg"
import ChiliBurger from "../../../../assets/images/tabsfoodsimages/burgers/chiliburgerblack.jpg"
import CaliforniaBurger from "../../../../assets/images/tabsfoodsimages/burgers/californiaburgerblack.jpg"
import DoubleBuffaloBurger from "../../../../assets/images/tabsfoodsimages/burgers/doublebuffaloburgerblack.jpg"
import SearchIcon from "../../../../assets/images/search.svg";
import CloseIcon from "../../../../assets/images/close-icon.svg";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background: "#000", display: 'block', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', backgroundColor: '#000', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

export default function Burgers({selectedCategory}) {

    const [modal, setModal] = useState(false);
    const [selectedBurger, setSelectedBurger] = useState(false);
    const [burger, setBurger] = useState([
        {
            id: 1,
            image: BuffaloBurger,
            name: 'Buffalo burger',
            description: 'A hamburger made using beef from Angus cattle.',
            price: '$22.99',
            category: 'spicy',
        },
        {
            id: 2,
            image: DoubleSlugBurger,
            name: 'Double slugburger',
            description: 'Popular regional hamburger ingredients in Australia',
            price: '$17.99',
            category: 'chicken',
        },
        {
            id: 3,
            image: AngusBurger,
            name: 'Angus burger',
            description: 'dfjhfghfghfgh',
            price: '$24.99',
            category: 'spicy',
        },
        {
            id: 4,
            image: AussieBurger,
            name: 'Aussie burger',
            description: 'sdfgdhfgjh fghdfd',
            price: '$18.99',
            category: 'meat',
        },
        {
            id: 5,
            image: ChiliBurger,
            name: 'Chili burger',
            description: 'dfgdffbjfh',
            price: '$14.99',
            category: 'chicken',
        },
        {
            id: 6,
            image: CaliforniaBurger,
            name: 'California burger',
            description: 'fgdg dfgdfg',
            price: '$14.99',
            category: 'fish',
        },
        {
            id: 7,
            image: DoubleBuffaloBurger,
            name: 'Double buffalo burger',
            description: 'fgdg dfgdfg',
            price: '$18.99',
            category: 'meat',
        },
    ])
    const [filteredBurger, setFilteredBurger] = useState([]);

    useEffect(() => {
        if(selectedCategory === 'all') {
            setFilteredBurger(burger);
        } else {
            setFilteredBurger(burger.filter(b => b.category === selectedCategory))
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
        setSelectedBurger(item)
    }

    return (
        <>
            <div className="slider">
                <div className="slider-container">
                    <Slider {...settings}>
                        {filteredBurger.map(item => {
                            return (
                                <div className="itemblog">
                                    <div className="itemblogimg">
                                        <img src={item.image} />
                                        <div className="clicksearch">
                                            <span className="iconsspan-dark" onClick={() => toggle(item)}>
                                                <i className="fas fa-search"></i>
                                            </span>

                                            <span className="iconsspan-dark">
                                                <i className="fas fa-heart"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="iteminfo">
                                        <div className="iteminfoparent">
                                            <a href="#" className="iteminfo-title">
                                                {item.name}
                                            </a>
                                        </div>
                                        <div className="iteminfotext">
                                            <p id="lorem">
                                                Buffalo burgers have less
                                                cholesterol and less fat
                                            </p>
                                        </div>
                                        <div className="link_blog">
                                            <span className="link_href"></span>
                                            <span className="link_href1"></span>
                                        </div>
                                        <h3 id="leal">{item.price}</h3>
                                        <button type="button" id="btn2">
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
                <div className="modal-burgers" onClick={() => setModal(false)}>
                    <div className="modal-container1">
                        <img
                            className="burger-img"
                            src={selectedBurger.image}
                            alt={selectedBurger.name}
                        />
                    </div>

                    <div className="modalimg-icons">
                <span className="modalimg-icons__search">
                    <img src={SearchIcon} alt={SearchIcon} />
                </span>
                        <span className="modalimg-icons__close">
                    <img src={CloseIcon} alt={CloseIcon} />
                </span>
                    </div>
                </div>
            )}
        </>
    )
}
