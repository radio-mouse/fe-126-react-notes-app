import React, { useState } from 'react';

import deleteIcon from '../../assets/CloseDark.svg';
import Modal from './Modal';

const Card = ({ note, handleDelete }) => {
  const [hasWarning, setHasWarning] = useState(false);
  const { title, color } = note;

  return (
    <>
      <div className="card" style={{ background: color }}>
        <button type="button" className="card__content">
          {title}
        </button>
        <button onClick={() => setHasWarning(true)} type="button" className="card__delete">
          <img src={deleteIcon} alt="Delete Note" />
        </button>
      </div>
      {hasWarning && <Modal text="Are you you wanna delete this note?" handleAccept={handleDelete} handleCancel={() => setHasWarning(false)} />}
    </>
  );
};

export default Card;
