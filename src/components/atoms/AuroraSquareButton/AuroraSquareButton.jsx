import React from 'react';
import './AuroraSquareButton.css';

const AuroraSquareButton = ({ text = "Dashboard", onClick }) => {
  return (
    <button className="aurora-square-container" onClick={onClick}>
      <div className="magic-square">
        <span className="button-text">{text}</span>
      </div>
    </button>
  );
};

export default AuroraSquareButton;