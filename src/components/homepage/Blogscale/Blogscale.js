import React, { useState } from 'react'
import Bigburger from "../../../assets/images/bigburger.jpg"
import Japanesesushi from "../../../assets/images/japanesesushi.jpg"
import "./Blogscale.scss"

export default function Blogscale () {

    return (
        <>
        <div className="blogScale">
          <div className="blogScale__container">
              <div className="blogScale__contentFirst">
                  <img src={Bigburger} className="blogScale__image"/>
                  <div className="blogScale__item">
                      <div className="subtitle">BUY 2 GET 3</div>
                      <div className="burgers-title">BIG BURGERS</div>
                      <a href="#" className="readMore">READ MORE</a>
                  </div>
              </div>
              <div className="blogScale__contentSecond">
                  <img src={Japanesesushi} className="blogScale__image" />
                  <div className="blogScale__item">
                      <div className="subtitle">TRADITIONAL</div>
                      <div className="burgers-title">JAPANESE SUSHI</div>
                      <a href="#" className="readMore">READ MORE</a>
                  </div>
              </div>
          </div>
        </div>
        </>
    )
}
