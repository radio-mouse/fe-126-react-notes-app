import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import editIcon from '../../assets/Edit.svg';
import backIcon from '../../assets/Back.svg';
import Note from '../components/Note';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { HOME } from '../routes';
import { getNote } from '../helpers';

const Detail = ({ notes }) => {
  const { noteId } = useParams();
  const { push } = useHistory();

  const note = getNote(noteId, notes);

  const { title, text, id } = note ?? {};

  return (
    <>
      <Navigation handler={() => push(`/${id}/edit`)} icon={editIcon} text="Edit Note">
        <Button handler={() => push(HOME)} icon={backIcon} text="Go Back" />
      </Navigation>
      <Note title={title} text={text} />
    </>
  );
};

export default Detail;
