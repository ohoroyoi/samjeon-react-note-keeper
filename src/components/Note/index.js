import React from "react";

const Note = props => {
  const { list, activeNoteId, onEditNote } = props;
  // const activeNote = list.filter(item => item.id === activeNoteId)[0];
  const activeNote = list.find(item => item.id === activeNoteId); // 배열의 첫번째 객체 반환

  return (
    <div>
      <input name="title" value={activeNote.title} onChange={onEditNote} />
      <textarea
        name="content"
        value={activeNote.content}
        onChange={onEditNote}
      />
    </div>
  );
};

export default Note;
