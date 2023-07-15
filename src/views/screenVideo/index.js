import React, { useState } from 'react'

import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom';
import VideoPlayer from '../VideoComponent';
import { FaBars } from 'react-icons/fa';

function ScreenVideo() {
  const [isOpenModal, setisOpenModal] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
    const Home = useNavigate();
    const Video = useNavigate();
    const Menu = useNavigate();

    const onClickMenuPrincipal = ()=> {
      Menu('/MenuPrincipal')
    }

    const onClickModal = () => {
      setisOpenModal(true);
    };

    const handleButtonClickHome = () => {
      Home('/');
    };
    const handleButtonClickMusic = () => {
      Video('/Menu');
    };

    const handleSidebarToggle = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div className={styles.AppHome}>
    <div className={styles.sidebarContainer}>
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <ul className={styles.sidebarmenu}>
        <li>
          <a href="#" onClick={handleButtonClickHome}>
            Sair
          </a>
        </li>
        <li>
          <a href="#" onClick={onClickMenuPrincipal}>
            Menu Principal
          </a>
        </li>
        <li>
          <a href="#" onClick={onClickModal}>
            Biblioteca
          </a>
        </li>
        <li>
          <a href="#" onClick={handleButtonClickMusic}>
            Ouvir Musicas
          </a>
        </li>
      </ul>
    </div>
    <button className={styles.sidebarButton} onClick={handleSidebarToggle}>
      <FaBars />
    </button>
    <div>
      <VideoPlayer
      isOpenModal={isOpenModal}
      setisOpenModal={setisOpenModal}
      />
    </div>
    </div>
    </div>
  )
}

export default ScreenVideo
