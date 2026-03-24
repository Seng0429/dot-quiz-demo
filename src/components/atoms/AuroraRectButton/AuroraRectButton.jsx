import React from 'react';
import './AuroraRectButton.css';

const AuroraRectButton = ({ text, onClick }) => {
  return (
    <button className="aurora-rect-container" onClick={onClick}>
      <div className="magic-rect">
        <span className="button-text">{text}</span>
      </div>
    </button>
  );
};

export default AuroraRectButton;