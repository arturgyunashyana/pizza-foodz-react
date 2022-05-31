import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="section5parent">
        <div className="section5parent-groups">
          <div className="section5item">
            <img src='https://parkofideas.com/foodz/demo1/wp-content/uploads/2019/03/demo1-0616827188-1.svg' />
            <div id="phonevolume">
              <i className="fas fa-phone-volume"></i>
              1-800-312-2121
            </div>
            <div className="textinfo">
              <p>555 California str, Suite 100 San Francisco, CA 94107</p>
            </div>

          </div>

          <div className="section5info">
            <div className="section5text">
              <h4>Our Menu</h4>
              <ul>
                <li><a href="#"> Pizza</a></li>
                <li><a href="#">Burgers</a></li>
                <li><a href="#">Sushi</a></li>
                <li><a href="#">Steaks</a></li>
                <li><a href="#">Drinks</a></li>
              </ul>
            </div>
            <div className="section5text">
              <h4>Pages</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Blog Post</a></li>
                <li><a href="#">Wishlist</a></li>
              </ul>
            </div>
            <div className="section5text">
              <h4>How can we help</h4>
              <ul>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy and Cookie policy</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>



        <div className="section5footer">
          <span>
            <p>© Copyright 2019 Foodz WordPress Theme</p>
          </span>

          <span id="iconsweb">
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