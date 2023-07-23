// make button component

// Button.js
import React, { useState } from 'react';
import './Common.css';

const Button = (props) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      {isPopupOpen ? (
        <div className="popup">
          <span className="close" onClick={handlePopupClose}>
            &times;
          </span>
          <p>This is the pop-up content.</p>
        </div>
      ) : (
        <button className="translate-button" onClick={handleButtonClick}>
          {props.title}
        </button>
      )}
    </div>
  );
};

export default Button;
