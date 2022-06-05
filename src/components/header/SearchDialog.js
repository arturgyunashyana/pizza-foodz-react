import React from 'react';
import './SearchDialog.scss';
import closeIcon from '../../assets/images/close.svg';

const SearchDialog = ({setShowSearchDialog}, {showSearchDialog}) => {

    if (setShowSearchDialog) {
        document.body.style.overflow = 'hidden'
    }else {
        document.body.style.overflow = 'auto'
    }

  return (
    <div className="searchDialogDark">
        <div className="searchDialogDark-container">
            <div className="searchDialogDark-content">
                    <span className="content-text">
                        What you are looking for?
                    </span>
                <input className="content-inp" type="text" placeholder="Start typing..."/>
            </div>

            <img
                className="searchDialogDark-close"
                src={closeIcon} alt="close"
                onClick={() => setShowSearchDialog(false)}
            />
        </div>
    </div>
  )
}

export default SearchDialog
