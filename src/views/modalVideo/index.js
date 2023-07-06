import React from 'react'
import ReactModal from 'react-modal'
import styles from './index.module.scss'

function ModalVideo({isOpenModal,setisOpenModal}) {
    return (
        <div>
            <ReactModal isOpen={isOpenModal}  overlayClassName={styles.modalOverlay} className={styles.sidebarModal}>
            <button onClick={() => setisOpenModal(false)} className={styles.closeModalButton} >
          X
        </button>
                <p>ASD</p>
            </ReactModal>
        </div>
    )
}

export default ModalVideo
