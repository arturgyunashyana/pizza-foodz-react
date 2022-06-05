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
import Bar from '../../assets/bar.svg'
import Close from '../../assets/images/close.svg'
import SearchDialog from './SearchDialog';
import ScrollMenuDark from "../../common/scrollMenudark/ScrollMenudark";
import ScrollTotopWhite from "../../common/scrolltotop/ScrollTotop";

const Header = () => {
    const [showSearchDialog, setShowSearchDialog] = useState(false);
    const [navbar, setNavbar] = useState(false)

    if (navbar) {
        document.body.style.overflow = 'hidden'
    }else {
        document.body.style.overflow = 'auto'
    }


    return (
        <>
            <div className="header">
                <div className="header__container">
                    <img
                        src={Bar}
                        alt="Bar"
                        className="mobile-bar"
                        onClick={() => setNavbar(!navbar)}
                    />
                    <div className="header__icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram-square"></i>
                        <i className="fab fa-twitter"></i>
                    </div>

                    <div className="header__fon">
                        <img className="site-logo" src={siteLogo} alt="logo" />
                    </div>

                    <div className="header__icons">
                        <i className="fas fa-search"
                           onClick={() => setShowSearchDialog(true)}>
                        </i>
                        <i className="fas fa-heart"></i>
                        <i className="fas fa-shopping-bag bag-dark"></i>
                    </div>
                    <i className="fas fa-search mobile-icon"
                       onClick={() => setShowSearchDialog(true)}>
                    </i>
                </div>
            </div>
            <div
                className={ navbar ? 'header__menu-active' : 'header__menu'}
            >
                <div className="header__container-menu">
                    <div className='navbar-close-container'>
                        <img
                            className='navbar-close'
                            src={Close} alt="close"
                            onClick={() => setNavbar(false)}
                        />
                    </div>

                    <div className='header__main'>
                        <div className="header__nav">
                            <img src={pizzaIcon} />
                            <a className="header__nav-link" href="#">Pizza</a>
                        </div>

                        <div className="header__nav">
                             <img src={burgersIcon} />
                             <a className="header__nav-link" href="#">Burgers</a>
                        </div>

                        <div className="header__nav">
                             <img src={sushiIcon} />
                             <a className="header__nav-link" href="#">Sushi</a>
                        </div>

                        <div className="header__nav">
                             <img src={noodlesIcon} />
                             <a className="header__nav-link" href="#">Noodles</a>
                        </div>

                        <div className="header__nav">
                             <img src={steaksIcon} />
                             <a className="header__nav-link" href="#">Steaks</a>
                        </div>

                        <div className="header__nav">
                             <img src={dessertsIcon} />
                             <a className="header__nav-link" href="#">Desserts</a>
                        </div>

                        <div className="header__nav">
                             <img src={drinksIcon} />
                             <a className="header__nav-link" href="#">Drinks</a>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollMenuDark />
            <ScrollTotopWhite />
            {showSearchDialog &&
                <SearchDialog
                    setShowSearchDialog={setShowSearchDialog}
                    showSearchDialog={showSearchDialog}
                />
            }
        </>
    )
}

export default Header
