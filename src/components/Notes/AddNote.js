import React from 'react';
import { useState } from 'react';
import "../../css/output.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    if(characterLimit - event.target.value.length >=0) {
      setNoteText(event.target.value)
    }
  };

  const handleSaveClick = () => {
    if(noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText('');
    }
  };

  return(<div className="note new">
    <textarea 
    row="8"
    cols="10"
    placeholder="Type to add a note"
    value={noteText}
    onChange={handleChange}
    ></textarea>
    <div className="note-footer">
      <small className='character-limit'>{characterLimit - noteText.length} Remaining</small>
      <button className="save save-button" onClick={handleSaveClick}>Save</button>
    </div>
  </div>
  );
};

export default AddNote;