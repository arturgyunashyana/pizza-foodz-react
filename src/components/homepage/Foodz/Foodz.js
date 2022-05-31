import './Foodz.css'
import Grey from "../../../assets/images/greyimg.jpg"

export default function Foodz() {
    return (
        <>
        <div className='foodz'>
            <img src={Grey} className='foodzimg' />
            <div className='foodzblog'>
            <div className='foodztitle'>
                <h1 className='foodztitle_h1'>FOODZ – RESTAURANT, PIZZA, FOOD DELIVERY WP THEME</h1>
            </div>

            <div className='foodztextblog'>
                <div className='foodz_text'>
                    <p className='foodz_paragraph'>
                       Giving the pizza its unique flavor and texture is our speciality.
                       Good sauce, right amount of cheese and great crust sets Fratello
                       Pizza apart from other pizza joints .We have a good array of
                       delicious pasta, subs, salads in addition to the more traditional
                       pizzas and speciality pizzas.
                    </p>
                </div>
                <div className='foodz_text'>
                    <p className='foodz_paragraph'>
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
