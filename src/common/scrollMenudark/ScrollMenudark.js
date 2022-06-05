import React, {useState, useEffect } from "react";
import pizzaIcon from '../../assets/images/pizza-icon.svg';
import burgersIcon from '../../assets/images/burgers-icon.svg';
import sushiIcon from '../../assets/images/sushi-icon.svg';
import noodlesIcon from '../../assets/images/noodles-icon.svg';
import steaksIcon from '../../assets/images/steaks-icon.svg';
import dessertsIcon from '../../assets/images/desserts-icon.svg';
import drinksIcon from '../../assets/images/drinks-icon.svg';
import './scrollmenudark.scss'

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
            <div className='scrollmenu__container'>
                <div className="scrollmenu__nav">
                    <div className="scrollmenu__item">
                        <img src={pizzaIcon } />
                        <a className="scrollmenu__link" href="#">Pizza</a>
                    </div>

                    <div className="scrollmenu__item">
                        <img src={burgersIcon} />
                        <a className='scrollmenu__link' href="#">Burgers</a>
                    </div>

                    <div className="scrollmenu__item">
                        <img src={sushiIcon} />
                        <a className="scrollmenu__link" href="#">Sushi</a>
                    </div>

                    <div className="scrollmenu__item">
                        <img src={noodlesIcon} />
                        <a className="scrollmenu__link" href="#">Noodles</a>
                    </div>

                    <div className="scrollmenu__item">
                        <img src={steaksIcon} />
                        <a className="scrollmenu__link" href="#">Steaks</a>
                    </div>

                    <div className="scrollmenu__item">
                        <img src={dessertsIcon} />
                        <a className="scrollmenu__link" href="#">Desserts</a>
                    </div>

                    <div className="scrollmenu__item">
                        <img src={drinksIcon} />
                        <a className="scrollmenu__link" href="#">Drinks</a>
                    </div>
                </div>

                <div className='scrollmenu__shopping'>
                    <i className="fas fa-shopping-bag bag"></i>
                </div>
            </div>
        </div>
    )
}
