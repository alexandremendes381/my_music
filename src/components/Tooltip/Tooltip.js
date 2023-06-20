import React, { useState } from 'react';
import styles from './index.module.scss'


const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className={styles.tooltiptext} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && <span className={styles.tooltiptext}>{text}</span>}
    </div>
  );
};

export default Tooltip;
