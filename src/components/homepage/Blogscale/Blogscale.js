import React, { useState } from 'react'
import Bigburger from "../../../assets/images/bigburger.jpg"
import Japanesesushi from "../../../assets/images/japanesesushi.jpg"
import "./Blogscale.css"

export default function Blogscale () {

    return (
        <>
        <div className="blogscale">
          <div className="blogscale__container">
              <div className="imgburger">
                  <img src={Bigburger} className="bigburger"/>
                  <div className="hreftext1">
                      <h1 className="freetext">BUY 2 GET 3</h1>
                      <h1 className="freetext1">BIG BURGERS</h1>
                      <a href="#" id="readmore1">READ MORE</a>
                  </div>
              </div>
              <div className="imgjapanesesushi">
                  <img src={Japanesesushi} className="japanesesushi" />
                  <div className="hreftext1">
                      <h1 className="freetext">TRADITIONAL</h1>
                      <h1 className="freetext1">JAPANESE SUSHI</h1>
                      <a href="#" id="readmore1">READ MORE</a>
                  </div>
              </div>
          </div>
        </div>
        </>
    )
}
