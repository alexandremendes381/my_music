import React from 'react';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import ReactModal from 'react-modal';
import styles from './index.module.scss';

function ScreenBiblioteca({ isOpenBiblioteca, setIsBiblioteca, currentTrackIndex, tracks }) {
  return (
    <div >
      <ReactModal
        isOpen={isOpenBiblioteca}
        overlayClassName={styles.modalOverlay}
      >
        <button
          className={styles.closeModalButton}
          onClick={() => setIsBiblioteca(false)}
        >
          X
        </button>
        <div />
        <div className={styles.container}>
          <div className={styles.box}>
          <img src={tracks[currentTrackIndex]?.image} style={{ width: '150px', height: 'auto' }} />
            <div className={styles.modalActions1}>
              <ButtonHome style={{ backgroundColor: '#E36C1C', border: '#E36C1C' }}>
                Salvar
              </ButtonHome>
            </div>
          </div>
          <div className={styles.box}>
          <img src={tracks[currentTrackIndex]?.image} style={{ width: '150px', height: 'auto' }} />
            <div className={styles.modalActions1}>
              <ButtonHome style={{ backgroundColor: '#E36C1C', border: '#E36C1C' }}>
                Salvar
              </ButtonHome>
            </div>
          </div>
        </div>



      </ReactModal>
    </div>
  );
}

export default ScreenBiblioteca;
