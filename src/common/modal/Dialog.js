import React from 'react'
import './dialog.css'
import SearchIcon from '../../assets/images/search.svg'
import CloseIcon from '../../assets/images/close-icon.svg'

export default function Dialog ({setModal, selectedBurger}) {

    return (
        <div className="modal-burgers" onClick={() => setModal(false)}>
            <div className="modal-container1">
                <img
                    className="burger-img"
                    src={selectedBurger.image}
                    alt={selectedBurger.name}
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
