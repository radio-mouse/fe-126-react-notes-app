import React, { useState } from 'react';

import editIcon from '../../assets/Edit.svg';
import saveIcon from '../../assets/Save.svg';
import backIcon from '../../assets/Back.svg';
import Modal from '../components/Modal';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import Editor from '../components/Editor';

import { COLORS } from '../components/ColorPicker';

const Detail = ({ handleBack, setNotes }) => {
  const [isEdit, setIsEdit] = useState(true);
  const [hasWarning, setHasWarning] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [color, setColor] = useState(COLORS[0]);

  const warningCheck = () => {
    if (isEdit && (title || text)) {
      setHasWarning(true);
    } else {
      handleBack();
    }
  };

  const createNote = () => {
    setNotes((prev) => [{ id: Date.now(), title: title || 'No title', text, color }, ...prev]);
    handleBack();
  };

  return (
    <>
      <Navigation
        setIsEdit={setIsEdit}
        isDetail
        icon={isEdit ? saveIcon : editIcon}
        text={`${isEdit ? 'Save' : 'Edit'} Note`}
        handler={isEdit ? createNote : () => setIsEdit(true)}
      >
        <Button handler={warningCheck} icon={backIcon} text="Go Back" />
      </Navigation>
      <Editor
        title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
        color={color}
        setColor={setColor}
      />
      {hasWarning && <Modal text="Are you you wanna leave with not saved data?" handleAccept={handleBack} handleCancel={() => setHasWarning(false)} />}
    </>
  );
};

export default Detail;
