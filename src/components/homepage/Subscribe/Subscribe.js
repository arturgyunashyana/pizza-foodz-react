import './subscribe.scss'

export default function Subscribe () {

    return (
        <div className="subscribe">
           <div className="subscribe__container">
               <div className="subscribe__content">
                   <h2 className="subscribe__title">
                       SUBSCRIBE TO NEWSLETTER
                   </h2>
                   <p className="subscribe__description">
                       Subscribe to the weekly newsletter for all the latest updates
                   </p>
                   <div className="subscribe__item">
                       <input
                           className="subscribe__inp"
                           type="email"
                           placeholder="Your email address"
                       />
                       <input
                           className="subscribe__btn"
                           type="submit"
                           value="Sign up"
                       />
                   </div>
               </div>
           </div>
        </div>
    )
}
