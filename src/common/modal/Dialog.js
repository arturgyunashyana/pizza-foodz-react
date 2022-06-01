import React from 'react'
import './dialog.scss'
import SearchIcon from '../../assets/images/search.svg'
import CloseIcon from '../../assets/images/close-icon.svg'

export default function Dialog ({setModal, selectedBurger}) {

    return (
        <div className="dialog" onClick={() => setModal(false)}>
            <div className="dialog__container">
                <img
                    className="dialog__image"
                    src={selectedBurger.image}
                    alt={selectedBurger.name}
                />
            </div>

            <div className="dialog__icons">
                <span className="dialog__icons-search">
                    <img src={SearchIcon} alt={SearchIcon} />
                </span>
                <span className="dialog__icons-close">
                    <img src={CloseIcon} alt={CloseIcon} />
                </span>
            </div>
        </div>
    )
}
