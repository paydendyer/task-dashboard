import React from 'react';
import "../css/output.css";

const ToggledarkMode = ({ handleToggleDarkMode }) => {
  return(
    <div className="header">
      <button onClick={() => 
        handleToggleDarkMode(
          (previousDarkMode)=> !previousDarkMode
          )
          } className="save"
          >
            Toggle Mode
        </button>
    </div>
  )
}
export default ToggledarkMode;