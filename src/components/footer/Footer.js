import React from 'react';
import './Footer.scss';
import logoFooter from '../../assets/images/logo-footer.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__item">
            <img className="logo-footer" src={logoFooter} alt='logoFooter' />
            <div className="footer__phonevolume">
              <i className="fas fa-phone-volume"></i>
              1-800-312-2121
            </div>
            <div className="footer__text">
              <p>555 California str, Suite 100 San Francisco, CA 94107</p>
            </div>
          </div>

          <div className="footer__main">
            <div className="footer__info">
              <span className="footer__subtitle">
                Our Menu
              </span>
                <a className="footer__link" href="#">Pizza</a>
                <a className="footer__link" href="#">Burgers</a>
                <a className="footer__link" href="#">Sushi</a>
                <a className="footer__link" href="#">Steaks</a>
                <a className="footer__link" href="#">Drinks</a>
            </div>
            <div className="footer__info">
              <span className="footer__subtitle">
                Pages
              </span>
                  <a className="footer__link" href="#">About</a>
                  <a className="footer__link" href="#">Contact</a>
                  <a className="footer__link" href="#">Blog</a>
                  <a className="footer__link" href="#">Blog Post</a>
                  <a className="footer__link" href="#">Wishlist</a>
            </div>
            <div className="footer__info">
              <span className="footer__subtitle">
                How can we help
              </span>
                <a className="footer__link" href="#">Terms and Conditions</a>
                <a className="footer__link" href="#">Privacy and Cookie policy</a>
                <a className="footer__link" href="#">FAQ</a>
            </div>
          </div>
        </div>



        <div className="footer__find">
          <span className="footer__find-title">
            <p>© Copyright 2019 Foodz WordPress Theme</p>
          </span>

          <span className="footer__iconWeb">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-twitter"></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
