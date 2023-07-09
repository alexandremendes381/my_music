import ReactModal from 'react-modal';
import styles from './index.module.scss';

function ModalVideo({ isOpenModal, setisOpenModal, videoTracks, handleTrackClick, currentTime }) {
  return (
    <div>
      <ReactModal isOpen={isOpenModal} overlayClassName={styles.modalOverlay} className={styles.sidebarModal}>
        <button onClick={() => setisOpenModal(false)} className={styles.closeModalButton}>
          X
        </button>
        <div className={styles.sidebarContent}>
          {videoTracks.map((track, index) => (
            <div key={track.id} className={styles.box}>
              <img
                src={track.imagem_play}
                alt="Album Cover"
                className={styles.albumImage}
                onClick={() => handleTrackClick(index)}
              />
              <div className={styles.modalActions}>
                <li
                  onClick={() => handleTrackClick(index)}
                  className={index === currentTime ? styles.active : ''}
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

export default ModalVideo;
