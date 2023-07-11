import React from 'react';
import styles from './index.module.scss';
import newLoading from '../../assets/images/newLoading.mp4';

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles['left-side']}>
      </div>
      <div className={styles.videobackground}>
        <video autoPlay loop muted className={styles.video} preload="auto">
          <source src={newLoading} type="video/mp4" />
        </video>
      </div>
      <div className={styles['right-side']}>
      </div>
    </div>
  );
}

export default Loading;
