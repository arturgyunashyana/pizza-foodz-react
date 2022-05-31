import { useState, useEffect } from 'react'
import './scrolltotopwhite.css'

export default function ScrollTotopred () {

    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400){
                setShowScroll(true)
            } else if (showScroll && window.pageYOffset <= 400){
                setShowScroll(false)
            }
        };
        window.addEventListener('scroll', checkScrollTop)
    }, [showScroll])

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };



    return(
        <>
            {showScroll ?
                <button className="scroll-to-top-white" onClick={scrollTop}>
                    <i id="arrow-black" className="fas fa-chevron-up"></i>
                </button> : <></>
            }
        </>
    )
}
