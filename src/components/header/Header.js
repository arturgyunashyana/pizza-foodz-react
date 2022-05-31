import React, { useState } from 'react';
import './Header.scss';
import siteLogo from '../../assets/images/logo.svg';
import pizzaIcon from '../../assets/images/pizza-icon.svg';
import burgersIcon from '../../assets/images/burgers-icon.svg';
import sushiIcon from '../../assets/images/sushi-icon.svg';
import noodlesIcon from '../../assets/images/noodles-icon.svg';
import steaksIcon from '../../assets/images/steaks-icon.svg';
import dessertsIcon from '../../assets/images/desserts-icon.svg';
import drinksIcon from '../../assets/images/drinks-icon.svg';
import SearchDialog from './SearchDialog';
import ScrollMenuDark from "../../common/scrollMenudark/ScrollMenudark";
import ScrollTotopWhite from "../../common/scrolltotopwhite/ScrollTotopWhite";

const Header = () => {
    const [showSearchDialog, setShowSearchDialog] = useState(false);

    return (
        <>
            <div className="menuwhite">
                <div className="headermenuWhite">
                    <div className="headermenunav">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram-square"></i>
                        <i className="fab fa-twitter"></i>
                    </div>

                    <div className="headerimg">
                        <img src={siteLogo} alt="logo" />
                    </div>

                    <div className="headermenunav">
                        <i className="fas fa-search" onClick={() => setShowSearchDialog(true)}></i>
                        <i className="fas fa-heart"></i>
                        <i className="fas fa-shopping-bag bag-dark"></i>
                    </div>
                </div>
            </div>
            <div className="blog1">
                <div className="blog1item">
                    <span className="item2">
                        <img src={pizzaIcon} />
                        <a className="item2_link" href="#">Pizza</a>
                    </span>

                    <span className="item2">
                        <img src={burgersIcon} />
                        <a className="item2_link" href="#">Burgers</a>
                    </span>

                    <span className="item2">
                        <img src={sushiIcon} />
                        <a className="item2_link" href="#">Sushi</a>
                    </span>

                    <span className="item2">
                        <img src={noodlesIcon} />
                        <a className="item2_link" href="#">Noodles</a>
                    </span>

                    <span className="item2">
                        <img src={steaksIcon} />
                        <a className="item2_link" href="#">Steaks</a>
                    </span>

                    <span className="item2">
                        <img src={dessertsIcon} />
                        <a className="item2_link" href="#">Desserts</a>
                    </span>

                    <span className="item2">
                        <img src={drinksIcon} />
                        <a className="item2_link" href="#">Drinks</a>
                    </span>
                </div>
            </div>
            <ScrollMenuDark />
            <ScrollTotopWhite />
            {showSearchDialog &&
                <SearchDialog setShowSearchDialog={setShowSearchDialog} />
            }
        </>
    )
}

export default Header
