import { Parallax } from 'react-parallax'
import Pizzaparallax from "../../../assets/images/pizzaparallax.jpg"
import './Foodparallax.scss'

export default function Foodparallax(){
    return(
        <>
        <Parallax bgImage={Pizzaparallax} strength={-200}>
        <div className="foodParallax">
            <div className="foodParallax__container">
                <div className="foodParallax__content">
                    <div className="foodParallax__item">FOR 10% DISCOUNT</div>
                      <h1 className="foodParallax__title">GET PROMOCODE</h1>
                        <label className="foodParallax__label">
                            <input
                                   className="foodParallax__inp"
                                   type="email"
                                   placeholder="Enter you email"
                            />
                            <a className="foodParallax__link" href="#">Send</a>
                        </label>
                    </div>
            </div>
        </div>
        </Parallax>
        </>
    )
}
