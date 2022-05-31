import React, { useState } from 'react'
import Burgers from './burgerdark/burgers';
import Pizza from './pizzadark/pizza';
import Sushi from './sushidark/sushi';
import Noodles from './noodlesdark/noodles';
import './foodclickdark.css';
import './slick.css'


const Foodclickdark = () => {
    const [selectedTab, setSelectedTab] = useState('burgers');
    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <>
            <div className="foodclick">
                <div className="foodclick1">
                    <ul className="burger_list">
                        <li className="list_product">
                            <button
                                className="btnburgers"
                                onClick={() => {setSelectedTab('burgers'); setSelectedCategory('all')}}
                            >
                                Burgers
                            </button>
                        </li>
                        <li className="list_product">
                            <button
                                className="btnburgers"
                                onClick={() => {setSelectedTab('pizza'); setSelectedCategory('all')}}
                            >
                                Pizza
                            </button>
                        </li>
                        <li className="list_product">
                            <button
                                className="btnburgers"
                                onClick={() => {setSelectedTab('sushi'); setSelectedCategory('all')}}
                            >
                                Sushi
                            </button>
                        </li>
                        <li className="list_product">
                            <button
                                className="btnburgers"
                                onClick={() => {setSelectedTab('noodlesblack'); setSelectedCategory('all')}}
                            >
                                Noodles
                            </button>
                        </li>
                    </ul>

                    <div className="click_blog">
                        <ul className="click_href">
                            <li className="click_list">
                                <button
                                    className={`click_btn ${selectedCategory === 'all' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('all')}
                                >
                                    All
                                </button>
                            </li>
                            <li className="click_list">
                                <button
                                    className={`click_btn ${selectedCategory === 'spicy' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('spicy')}
                                >
                                    Spicy
                                </button>
                            </li>
                            <li className="click_list">
                                <button
                                    className={`click_btn ${selectedCategory === 'meat' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('meat')}
                                >
                                    Meat
                                </button>
                            </li>
                            <li className="click_list">
                                <button
                                    className={`click_btn ${selectedCategory === 'fish' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('fish')}
                                >
                                    Fish
                                </button>
                            </li>
                            <li className="click_list">
                                <button
                                    className={`click_btn ${selectedCategory === 'chicken' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('chicken')}
                                >
                                    Chicken
                                </button>
                            </li>
                        </ul>
                    </div>


                    {selectedTab === 'burgers' ? <Burgers selectedCategory={selectedCategory} /> : <></>}
                    {selectedTab === 'pizza' ? <Pizza selectedCategory={selectedCategory} /> : <></>}
                    {selectedTab === 'sushi' ? <Sushi selectedCategory={selectedCategory} /> : <></>}
                    {selectedTab === 'noodlesblack' ? <Noodles selectedCategory={selectedCategory} /> : <></>}
                </div>
            </div>
        </>
    )
}

export default Foodclickdark;
