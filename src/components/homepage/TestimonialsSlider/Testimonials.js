import Slider from "react-slick";
import './testimonials.css'
import Charlez from  '../../../assets/images/Charlez.webp'
import Jesica from  '../../../assets/images/Jesica.webp'
import John from  '../../../assets/images/John.webp'

function Testimonials () {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

     return (
         <div className="testimonials">
             <div className="testimonials__container">
                 <h2 className="testimonials-title">TESTIMONIALS</h2>
                 <Slider className="slider-slick" {...settings}>
                     <div className="slider-slick-content">
                         <p className="slider-slick-text">
                             Woven silk pyjamas exchanged for blue quartz.
                             Brawny gods just flocked up to quiz and vex him.
                         </p>
                         <img className="slider-slick-fon" src={Jesica} alt="jesica" />
                         <span className="slider-slick-name">
                             Jessica Alba
                         </span>
                     </div>
                     <div className="slider-slick-content">
                         <p className="slider-slick-text">
                             The jay, pig, fox, zebra, and my wolves quack!
                             Blowzy red vixens fight for a quick jump.
                         </p>
                         <img className="slider-slick-fon" src={John} alt="john" />
                         <span className="slider-slick-name">
                             John Doe
                         </span>
                     </div>
                     <div className="slider-slick-content">
                         <p className="slider-slick-text">
                             The quick, brown fox jumps over a lazy dog. DJs flock
                             by when MTV ax quiz prog.
                         </p>
                         <img className="slider-slick-fon" src={Charlez} alt="charlez" />
                         <span className="slider-slick-name">
                             Charlize Theron
                         </span>
                     </div>
                 </Slider>
             </div>
         </div>
     )
}

export default Testimonials
