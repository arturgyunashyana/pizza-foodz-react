import React from 'react'
import './pizzadialog.css'
import SearchIcon from '../../assets/images/search.svg'
import CloseIcon from '../../assets/images/close-icon.svg'

export default function PizzaDialog ({setModal, selectedPizza}) {

    return (
        <div className="modal-pizza" onClick={() => setModal(false)}>
            <div className="modal-container">
                <img
                    className="pizza-img"
                    src={selectedPizza.image}
                    alt={selectedPizza.name}
                />
            </div>

            <div className="modalimg-icons">
                <span className="modalimg-icons__search">
                    <img src={SearchIcon} alt={SearchIcon} />
                </span>
                <span className="modalimg-icons__close">
                    <img src={CloseIcon} alt={CloseIcon} />
                </span>
            </div>
        </div>
    )
}
