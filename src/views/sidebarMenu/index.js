import React, { useState } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import ScreenBiblioteca from '../screenBiblioteca';

function SidebarMenu({ tracks, currentTrackIndex, handleTrackClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBiblioteca, setIsBiblioteca] = useState(false);

  const Home = useNavigate();
  const Video = useNavigate();
  const Menu = useNavigate();

  const onClickMenuPrincipal = () => {
    Menu('/MenuPrincipal')
  };

  const handleButtonClickHome = () => {
    Home('/');
  };

  const handleButtonClickVideo = () => {
    Video('/video');
  };

  const handleClickBiblioteca = () => {
    setIsBiblioteca(true);
    setIsOpen(false);
  };

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
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
            <a href="#" onClick={handleClickBiblioteca}>
              Biblioteca
            </a>
          </li>
          <li>
            <a href="#" onClick={handleButtonClickVideo}>
              Assistir Videos
            </a>
          </li>
        </ul>
      </div>
      <button className={styles.sidebarToggle} onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      <div>
        <ScreenBiblioteca
          tracks={tracks}
          currentTrackIndex={currentTrackIndex}
          isOpenBiblioteca={isOpenBiblioteca}
          setIsBiblioteca={setIsBiblioteca}
          handleTrackClick={handleTrackClick}
        />
      </div>
    </div>
  );
}

export default SidebarMenu;
