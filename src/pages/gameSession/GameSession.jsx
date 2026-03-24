import React, { useState } from 'react';
import styles from './GameSession.module.css';

const AuroraPulse = () => {
  const [isActive, setIsActive] = useState(false);

  // Smooth, rounded EKG path
  const pathData = "M0,125 L100,125 Q115,110 130,125 L150,125 Q165,30 185,220 Q205,125 240,125 Q260,90 290,125 L400,125 Q415,110 430,125 L450,125 Q465,30 485,220 Q505,125 540,125 Q560,90 590,125 L800,125";

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
      <div className={styles.monitor}>
        <svg className={styles.svg} viewBox="0 0 800 250" preserveAspectRatio="none">
          <defs>
            <linearGradient id="aurora-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#00e676" />
            </linearGradient>
          </defs>
          
          {/* 1. The Glass Tube */}
          <path className={styles.tubeBase} d={pathData} />
          
          {/* 2. The Atmospheric Glow (Moving with particle) */}
          <path className={styles.glowLayer} d={pathData} pathLength="3000" />
          
          {/* 3. The Bright Core Particle */}
          <path className={styles.particle} d={pathData} pathLength="3000" />
        </svg>
      </div>

      <button className="aurora-rect-btn" onClick={() => setIsActive(!isActive)}>
        <span>{isActive ? 'HALT PULSE' : 'ENGAGE PARTICLE'}</span>
      </button>
    </div>
  );
};

export default AuroraPulse;