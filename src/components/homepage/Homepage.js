import React from 'react';
import './Homepage.scss';
import HomepageSlider from './homepageslider/HomepageSlider';
import Foodclickdark from "./foodclickdark/Foodclickdark";
import Weserve from "./weservepassion/Weserve";
import Blogscale from "./Blogscale/Blogscale";
import Foodparallax from "./Foodparallax/Foodparallax";
import FoodRestaurant from "./Foodz/FoodRestaurant";
import Testimonials from "./TestimonialsSlider/Testimonials";

const Homepage = () => {
  return (
    <div className='homepage'>
        <HomepageSlider />
        <Weserve />
        <Blogscale />
        <Foodclickdark />
        <Foodparallax />
        <FoodRestaurant />
        <Testimonials />
    </div>
  )
}

export default Homepage
