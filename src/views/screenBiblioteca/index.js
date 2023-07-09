import React from 'react';
import ReactModal from 'react-modal';
import styles from './index.module.scss';

function ScreenBiblioteca({ isOpenBiblioteca, setIsBiblioteca, currentTrackIndex, tracks, handleTrackClick }) {
  return (
    <div>
      <ReactModal isOpen={isOpenBiblioteca} overlayClassName={styles.modalOverlay} className={styles.sidebarModal}>
        <button className={styles.closeModalButton} onClick={() => setIsBiblioteca(false)}>
          X
        </button>
        <div className={styles.sidebarContent}>
          {tracks.map((track, index) => (
            <div key={track.id} className={styles.box}>
              <img
                src={track.image}
                alt="Album Cover"
                className={styles.albumImage}
                onClick={() => handleTrackClick(index)}
              />
              <div className={styles.modalActions}>
                <li
                  onClick={() => handleTrackClick(index)} 
                  className={index === currentTrackIndex ? styles.active : ''}
                >
                  {track.title}
                </li>
              </div>
            </div>
          ))}
        </div>
      </ReactModal>
    </div>
  );
}

export default ScreenBiblioteca;
