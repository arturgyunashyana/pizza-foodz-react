import './Foodz.scss'

export default function FoodRestaurant () {
    return (
        <>
        <div className='foodRestaurant'>
            <div className='foodRestaurant__container'>
            <div className='foodRestaurant__info'>
                <h1 className='foodRestaurant__title'>
                    FOODZ – RESTAURANT, PIZZA, FOOD DELIVERY WP THEME
                </h1>
            </div>

            <div className='foodRestaurant__row'>
                <div className='foodRestaurant__row-content'>
                    <p className='foodRestaurant__row-paragraph'>
                       Giving the pizza its unique flavor and texture is our speciality.
                       Good sauce, right amount of cheese and great crust sets Fratello
                       Pizza apart from other pizza joints .We have a good array of
                       delicious pasta, subs, salads in addition to the more traditional
                       pizzas and speciality pizzas.
                    </p>
                </div>
                <div className='foodRestaurant__row-content'>
                    <p className='foodRestaurant__row-paragraph'>
                       The interior is remarkably clean and so brightly lit and shiny that
                       it’s almost sobering.Our service is quick, efficient, and polite. Come
                       in or call today and experience the great flavor of Food. Good sauce,
                       right amount of cheese and great crust sets Fratello Pizza.
                    </p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
