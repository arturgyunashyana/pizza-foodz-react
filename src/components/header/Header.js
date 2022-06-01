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
import ScrollTotopWhite from "../../common/scrolltotop/ScrollTotop";

const Header = () => {
    const [showSearchDialog, setShowSearchDialog] = useState(false);

    return (
        <>
            <div className="header">
                <div className="header__container">
                    <div className="header__icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram-square"></i>
                        <i className="fab fa-twitter"></i>
                    </div>

                    <div className="header__fon">
                        <img src={siteLogo} alt="logo" />
                    </div>

                    <div className="header__icons">
                        <i className="fas fa-search"
                           onClick={() => setShowSearchDialog(true)}>
                        </i>
                        <i className="fas fa-heart">
                        </i>
                        <i className="fas fa-shopping-bag bag-dark">
                        </i>
                    </div>
                </div>
            </div>
            <div className="header__menu">
                <div className="header__container-menu">
                    <span className="header__nav">
                        <img src={pizzaIcon} />
                        <a className="header__nav-link" href="#">Pizza</a>
                    </span>

                    <span className="header__nav">
                        <img src={burgersIcon} />
                        <a className="header__nav-link" href="#">Burgers</a>
                    </span>

                    <span className="header__nav">
                        <img src={sushiIcon} />
                        <a className="header__nav-link" href="#">Sushi</a>
                    </span>

                    <span className="header__nav">
                        <img src={noodlesIcon} />
                        <a className="header__nav-link" href="#">Noodles</a>
                    </span>

                    <span className="header__nav">
                        <img src={steaksIcon} />
                        <a className="header__nav-link" href="#">Steaks</a>
                    </span>

                    <span className="header__nav">
                        <img src={dessertsIcon} />
                        <a className="header__nav-link" href="#">Desserts</a>
                    </span>

                    <span className="header__nav">
                        <img src={drinksIcon} />
                        <a className="header__nav-link" href="#">Drinks</a>
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
