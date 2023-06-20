import React from 'react';
import styles from './index.module.scss';

function ButtonHome({ children , onClick}) {
  return (
    <div>
      <button onClick={onClick} className={styles.ButtonNewHome}>{children}</button>
    </div>
  );
}

export default ButtonHome;