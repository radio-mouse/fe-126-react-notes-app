import React from 'react';

import infoIcon from '../../assets/Info.svg';

const Modal = ({ text, handleAccept, handleCancel }) => (
  <div className="modal">
    <div className="modal__body">
      <img src={infoIcon} alt="Info" />
      <span className="modal__text">{text}</span>
      <div className="modal__buttons">
        <button
          type="button"
          onClick={handleAccept}
          className="modal__button modal__button_danger"
        >
          Yes
        </button>
        <button type="button" onClick={handleCancel} className="modal__button">No</button>
      </div>
    </div>
  </div>
);

export default Modal;
