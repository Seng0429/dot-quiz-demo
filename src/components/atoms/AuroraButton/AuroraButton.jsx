import React from 'react';
import './AuroraButton.css';

const AuroraButton = ({ text = "Explore", onClick }) => {
  return (
    <button className="aurora-button-container" onClick={onClick}>
      <div className="magic-circle">
        <span className="button-text">{text}</span>
      </div>
    </button>
  );
};

export default AuroraButton;