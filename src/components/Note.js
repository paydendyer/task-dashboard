import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import Draggable from 'react-draggable';

const Note = ({ id, text, date, handleDeleteNote }) => {
  return(
    <Draggable>
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small> {date}</small>
        <MdDeleteForever 
          onClick={() => handleDeleteNote(id)}
          className="delete-icon" 
          size="1.3em" 
          />
      </div>
    </div>
    </Draggable>
  )
};

export default Note;