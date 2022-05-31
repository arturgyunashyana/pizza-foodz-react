import React from 'react'
import './clicksearch.css'

function ClickSearch (props) {

    return (
            <div className="clicksearch">
                <span className="iconsspan-dark" onClick={props.toggle}>
                    <i className="fas fa-search"></i>
                </span>
                <span className="iconsspan-dark">
                    <i className="fas fa-heart"></i>
                </span>
            </div>
    )
}

export default ClickSearch;
