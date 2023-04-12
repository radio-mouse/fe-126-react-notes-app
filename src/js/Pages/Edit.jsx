import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import backIcon from '../../assets/Back.svg';
import Navigation from '../components/Navigation';
import saveIcon from '../../assets/Save.svg';
import Modal from '../components/Modal';
import Button from '../components/Button';
import Editor from '../components/Editor';

import { COLORS } from '../components/ColorPicker';
import { getNote } from '../helpers';

const Edit = ({ setNotes, notes }) => {
  const { noteId } = useParams();
  const { goBack } = useHistory();

  const note = getNote(noteId, notes);

  const [hasWarning, setHasWarning] = useState(false);
  const [title, setTitle] = useState(note?.title ?? '');
  const [text, setText] = useState(note?.text ?? '');
  const [color, setColor] = useState(note?.color ?? COLORS[0]);

  const hasNoteChanges = note?.title !== title || note?.text !== text || note?.color !== color;

  const warningCheck = () => {
    if (note ? hasNoteChanges : title || text) {
      setHasWarning(true);
    } else {
      goBack();
    }
  };

  const handleSave = () => {
    setNotes((prev) => [{ id: Date.now(), title: title || 'No title', text, color }, ...prev]);
    goBack();
  };

  return (
    <>
      <Navigation handler={handleSave} icon={saveIcon} text="Save Note">
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
      {hasWarning && <Modal text="Are you you wanna leave with not saved data?" handleAccept={goBack} handleCancel={() => setHasWarning(false)} />}
    </>
  );
};

export default Edit;
