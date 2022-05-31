import React, {useState, useEffect } from "react";
import pizzaIcon from '../../assets/images/pizza-icon.svg';
import burgersIcon from '../../assets/images/burgers-icon.svg';
import sushiIcon from '../../assets/images/sushi-icon.svg';
import noodlesIcon from '../../assets/images/noodles-icon.svg';
import steaksIcon from '../../assets/images/steaks-icon.svg';
import dessertsIcon from '../../assets/images/desserts-icon.svg';
import drinksIcon from '../../assets/images/drinks-icon.svg';
import './scrollmenudark.css'

export default function ScrollMenuDark () {

    const [showScroll,setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrolltop = () => {
            if (!showScroll && window.pageYOffset > 300){
                setShowScroll(true)
            }else if(showScroll && window.pageYOffset <= 300){
                setShowScroll(false)
            }
        }
        window.addEventListener('scroll', checkScrolltop)
    }, [showScroll])

    return (
        <div className={`scrollmenu ${showScroll ? "open" : ""} `}>
            <div className='itemsscrollparent'>
                <div className="blog1itemscroll">
            <span className="item3">
                <img src={pizzaIcon } />
                <a className="item3_link" href="#">Pizza</a>
            </span>

                    <span className="item3">
                <img src={burgersIcon} />
                <a className='item3_link' href="#">Burgers</a>
            </span>

                    <span className="item3">
                <img src={sushiIcon} />
                <a className="item3_link" href="#">Sushi</a>
            </span>

                    <span className="item3">
                <img src={noodlesIcon} />
                <a className="item3_link" href="#">Noodles</a>
            </span>

                    <span className="item3">
                <img src={steaksIcon} />
                <a className="item3_link" href="#">Steaks</a>
            </span>

                    <span className="item3">
                <img src={dessertsIcon} />
                <a className="item3_link" href="#">Desserts</a>
            </span>

                    <span className="item3">
                <img src={drinksIcon} />
                <a className="item3_link" href="#">Drinks</a>
            </span>
                </div>

                <div className='shopping-bag'>
                    <i className="fas fa-shopping-bag bag"></i>
                </div>
            </div>
        </div>
    )
}
