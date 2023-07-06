import React, { useState } from 'react'

import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom';
import ModalVideo from '../modalVideo';
import VideoPlayer from '../VideoComponent';

function ScreenVideo() {
  const [isOpenModal, setisOpenModal] = useState(false)
    const Home = useNavigate();
    const Video = useNavigate();

    const onClickModal = () => {
      setisOpenModal(true);
    };

    const handleButtonClickHome = () => {
      Home('/');
    };
    const handleButtonClickMusic = () => {
      Video('/Menu');
    };
  return (
    <div>
        <div >
        <div className={styles.sidebar}>
        <ul className={styles.sidebarmenu}>
          <li>
            <a href="#" onClick={handleButtonClickHome}>Início</a>
          </li>
          <li>
            <a href="#" >Buscar</a>
          </li>
          <li>
            <a href="#" onClick={onClickModal}>Biblioteca</a>
          </li>
          <li>
            <a href="#" onClick={handleButtonClickMusic}>Ouvir musicas</a>
          </li>
        </ul>
      </div>
        </div>
      <VideoPlayer/>
      <div>
      <ModalVideo 
      isOpenModal={isOpenModal}
      setisOpenModal={setisOpenModal}
      />
      </div>
    </div>
  )
}

export default ScreenVideo
