import React, { useState } from 'react'
import Burgers from './burgerdark/burgers';
import Pizza from './pizzadark/pizza';
import Sushi from './sushidark/sushi';
import Noodles from './noodlesdark/noodles';
import './foodclickdark.scss';
import './react-slider.scss'
import '../../../common/modal/dialog.scss'
import '../../../common/divspani/clicksearch.scss'
import './slick.css'


const Foodclickdark = () => {
    const [selectedTab, setSelectedTab] = useState('burgers');
    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <>
            <div className="foodTabs">
                <div className="foodTabs__container">
                    <div className="foodTabs__burger-list">
                        <button
                                className="foodTabs__tab"
                                onClick={() => {setSelectedTab('burgers');
                                setSelectedCategory('all')}}
                        >
                            Burgers
                        </button>
                        <button
                            className="foodTabs__tab"
                            onClick={() => {setSelectedTab('pizza'); setSelectedCategory('all')}}
                        >
                            Pizza
                        </button>
                        <button
                            className="foodTabs__tab"
                            onClick={() => {setSelectedTab('sushi'); setSelectedCategory('all')}}
                        >
                            Sushi
                        </button>
                        <button
                            className="foodTabs__tab"
                            onClick={() => {setSelectedTab('noodlesblack'); setSelectedCategory('all')}}
                        >
                            Noodles
                        </button>
                    </div>


                    <div className="foodTabs__info">
                                <button
                                    className={`foodTabs__btn ${selectedCategory === 'all' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('all')}
                                >
                                    All
                                </button>
                                <button
                                    className={`foodTabs__btn ${selectedCategory === 'spicy' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('spicy')}
                                >
                                    Spicy
                                </button>
                                <button
                                    className={`foodTabs__btn ${selectedCategory === 'meat' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('meat')}
                                >
                                    Meat
                                </button>
                                <button
                                    className={`foodTabs__btn ${selectedCategory === 'fish' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('fish')}
                                >
                                    Fish
                                </button>
                                <button
                                    className={`foodTabs__btn ${selectedCategory === 'chicken' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('chicken')}
                                >
                                    Chicken
                                </button>
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
