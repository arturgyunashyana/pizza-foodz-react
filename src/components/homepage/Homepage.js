import React from 'react';
import './Homepage.scss';
import HomepageSlider from './homepageslider/HomepageSlider';
import Foodclickdark from "./foodclickdark/Foodclickdark";
import Weserve from "./weservepassion/Weserve";
import Blogscale from "./Blogscale/Blogscale";
import Foodparallax from "./Foodparallax/Foodparallax";
import FoodRestaurant from "./Foodz/FoodRestaurant";
import Testimonials from "./TestimonialsSlider/Testimonials";
import AnimeEffect from "./AnimeEffect/AnimeEffect";
import WeRecommend from "./WeRecommend/WeRecommend";
import OurLimited from "./OurLimited/OurLimited";
import BlogPosts from "./BlogPosts/BlogPosts";
import HomeIcons from "./HomeIcons/HomeIcons";
import Subscribe from "./Subscribe/Subscribe";

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
        <AnimeEffect />
        <WeRecommend />
        <OurLimited />
        <BlogPosts />
        <HomeIcons />
        <Subscribe />
    </div>
  )
}

export default Homepage
