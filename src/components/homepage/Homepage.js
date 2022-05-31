import React from 'react';
import './Homepage.scss';
import HomepageSlider from './homepageslider/HomepageSlider';
import Foodclickdark from "./foodclickdark/Foodclickdark";
import Weserve from "./We Serve Passion/Weserve";
import Blogscale from "./Blogscale/Blogscale";
import Foodparallax from "./Foodparallax/Foodparallax";
import Foodz from "./Foodz/Foodz";
import Testimonials from "./TestimonialsSlider/Testimonials";

const Homepage = () => {
  return (
    <div className='homepage'>
        <HomepageSlider />
        <Weserve />
        <Blogscale />
        <Foodclickdark />
        <Foodparallax />
        <Foodz />
        <Testimonials />
    </div>
  )
}

export default Homepage
