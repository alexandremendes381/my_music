import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

const ElvisSign = () => {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlashing((prevIsFlashing) => !prevIsFlashing);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={`${styles['elvis-sign']} ${isFlashing ? styles['flashing'] : ''}`}>
        <span className={styles['letter']}>E</span>
        <span className={styles['letter']}>l</span>
        <span className={styles['letter']}>v</span>
        <span className={styles['letter']}>i</span>
        <span className={styles['letter']}>s</span>
      </div>
    </div>
  );
};

export default ElvisSign;
