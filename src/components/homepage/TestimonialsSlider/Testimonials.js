import Carousel from "react-elastic-carousel";
import './testimonials.scss'
import Charlez from  '../../../assets/images/Charlez.webp'
import Jesica from  '../../../assets/images/Jesica.webp'
import John from  '../../../assets/images/John.webp'

function Testimonials () {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 1 },
    ];

     return (
         <div className="testimonials">
             <div className="testimonials__container">
                 <h2 className="testimonials__title">TESTIMONIALS</h2>
                 <Carousel className="testimonials__slider" breakPoints={breakPoints}>
                     <div className="testimonials__slider-content">
                         <p className="testimonials__slider-paragraph">
                             Woven silk pyjamas exchanged for blue quartz.
                             Brawny gods just flocked up to quiz and vex him.
                         </p>
                         <img
                              className="testimonials__slider-image"
                              src={Jesica}
                              alt="jesica"
                         />
                         <span className="testimonials__slider-text">
                             Jessica Alba
                         </span>
                     </div>

                     <div className="testimonials__slider-content">
                         <p className="testimonials__slider-paragraph">
                             The jay, pig, fox, zebra, and my wolves quack!
                             Blowzy red vixens fight for a quick jump.
                         </p>
                         <img
                              className="testimonials__slider-image"
                              src={John}
                              alt="john"
                         />
                         <span className="testimonials__slider-text">
                             John Doe
                         </span>
                     </div>

                     <div className="testimonials__slider-content">
                         <p className="testimonials__slider-paragraph">
                             The quick, brown fox jumps over a lazy dog. DJs flock
                             by when MTV ax quiz prog.
                         </p>
                         <img
                              className="testimonials__slider-image"
                              src={Charlez}
                              alt="charlez"
                         />
                         <span className="testimonials__slider-text">
                             Charlize Theron
                         </span>
                     </div>
                 </Carousel>
             </div>
         </div>
     )
}

export default Testimonials
