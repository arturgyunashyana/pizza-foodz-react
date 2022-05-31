import React, { useState } from 'react';
import './Weserve.css';
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
    const [selectedBurger, setSelectedBurger] = useState(null);
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
        <div className="weparent">
        <div className="weserve">
            <div className="weserveone">

                <div className="border-fon">
                    <img class="border-img" src={BorderFon} alt="border-fon" />
                </div>
                <div className="imganime">
                    <img src={Rak} />
                </div>
                <span className="fon-text">
                    <img src={TextFon} alt="text-fon" />
                </span>
            </div>

            <div className="weservetwo">
                <h1 className="weservetwo-title">WE SERVE PASSION</h1>
            <Slider {...settings}>
         {pizza.map(item => {
             return (
                <div className="itemblog">
                   <div className="itemblogimg">
                       <img src={item.image} />
                       <div className="clicksearch">
                           <span className="iconsspan-dark"
                                 onClick={() => toggle(item)}
                           >
                               <i className="fas fa-search"></i>
                           </span>

                           <span className="iconsspan-dark">
                               <i className="fas fa-heart"></i>
                           </span>
                       </div>
                   </div>

                   <div className="iteminfo">
                    <h2 className="iteminfo-title">{item.name}</h2>
                    <span className="more">
                    <img className="more-fon" src={item.fon} />
                    <i className="excalation fa fa-exclamation-circle"></i>
                    </span>
                    <p id="lorem">Garlic Flatbread with Mozzarela Parmesan-Garlic-Rosemary</p>

                    <label>Crust</label><br></br>
                    <select>
                        <option>Choose an option</option>
                        <option>thik</option>
                        <option>thin</option>
                    </select><br></br>

                    <label>Size</label><br></br>
                    <select>
                        <option>Choose an option</option>
                        <option>25cm</option>
                        <option>30cm</option>
                        <option>35cm</option>
                    </select>

                    <h3 id="leal">$13.99</h3>
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
            </div>
        </div>
        </>
    )
}
