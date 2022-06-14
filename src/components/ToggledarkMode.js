import React from 'react';

const ToggledarkMode = ({ handleToggleDarkMode }) => {
  return(
    <div className="header">
      <button onClick={() => 
        handleToggleDarkMode(
          (previousDarkMode)=> !previousDarkMode
          )
          } className="toggle-mode"
          >
            Toggle Mode
        </button>
    </div>
  )
}
export default ToggledarkMode;