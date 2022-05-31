import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import ClickSearch from "../../../../common/divspani/ClickSearch";
import SpiderRoll from "../../../../assets/images/tabsfoodsimages/sushiblack/sushispiderrollblack.jpg"
import DragonRoll from "../../../../assets/images/tabsfoodsimages/sushiblack/sushidragonrollblack.jpg"
import ShrimpTempuraRoll from "../../../../assets/images/tabsfoodsimages/sushiblack/sushishrimptempuraroll.webp"
import SpicyTunaRoll from "../../../../assets/images/tabsfoodsimages/sushiblack/sushispicytunarollblack.jpg"
import CaterpillarRoll from "../../../../assets/images/tabsfoodsimages/sushiblack/sushicaterpilarrollblack.jpg"
import CrunchRoll from "../../../../assets/images/tabsfoodsimages/sushiblack/sushicrunchrollblack.webp"
import VegetableRoll from '../../../../assets/images/tabsfoodsimages/sushiblack/sushivegetablerollblack.jpg'
import Dialog from "../../../../common/modal/Dialog";
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
             return(
                <div className="itemblog">
                <div className="itemblogimg">
                    <img src={item.image} />
                    <ClickSearch
                       toggle={() => toggle(item)}
                    />
                </div>
                <div className="iteminfo">
                    <div className="iteminfoparent">
                        <a href="#" className="iteminfo-title">{item.name}</a>
                    </div>
                    <div className="iteminfotext">
                        <p id="lorem">Buffalo burgers have less cholesterol and less fat</p>
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

        {modal && (
            <div className="modal-burgers" onClick={() => setModal(false)}>
                <div className="modal-container1">
                    <img
                        className="burger-img"
                        src={selectedSushi.image}
                        alt={selectedSushi.name}
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
