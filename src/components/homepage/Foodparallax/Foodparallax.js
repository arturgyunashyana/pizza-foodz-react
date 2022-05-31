import { Parallax } from 'react-parallax'
import Pizzaparallax from "../../../assets/images/pizzaparallax.jpg"
import './Foodparallax.css'

export default function Foodparallax(){
    return(
        <>
        <Parallax bgImage={Pizzaparallax} strength={-200}>
        <div className="foodparallax">
            <div className="foodparallaxblog">
                <div className="parallaxtext">
                <div className="for">FOR 10% DISCOUNT</div>
                <h1 className="parallaxtext_h1">GET PROMOCODE</h1>
                <label>
                    <input type="email" placeholder="Enter you email" />
                    <a id="parallaxhref" href="#">Send</a>
                </label>

                </div>
            </div>
        </div>
        </Parallax>
        </>
    )
}
