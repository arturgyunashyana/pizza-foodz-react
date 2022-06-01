import React from 'react'
import './clicksearch.scss'

function ClickSearch (props) {

    return (
            <div className="clickSearch">
                <span className="clickSearch__icon" onClick={props.toggle}>
                    <i className="fas fa-search"></i>
                </span>
                <span className="clickSearch__icon">
                    <i className="fas fa-heart"></i>
                </span>
            </div>
    )
}

export default ClickSearch;
