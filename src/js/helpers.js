// eslint-disable-next-line import/prefer-default-export
export const getNote = (noteId, notes) => notes?.find(({ id }) => id === Number(noteId));
