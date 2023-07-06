import React, { useState } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import ScreenBiblioteca from '../screenBiblioteca';

function SidebarMenu({ handleButtonClick, tracks, currentTrackIndex, handleTrackClick }) {
  const [showDivs, setShowDivs] = useState(false);
  const [isOpenBiblioteca, setIsBiblioteca] = useState(false);



  const Home = useNavigate();
  const Video = useNavigate();
  const handleButtonClickHome = () => {
    Home('/');
  };
  const handleButtonClickVideo = () => {
    Video('/video');
  };
  const handleLinkClick = () => {
    setShowDivs(!showDivs);
    handleButtonClick();
  };
  const hendleClickBiblioteca = () => {
    setIsBiblioteca(true)
  }

  return (
    <div>
      <div className={styles.sidebar}>
        <ul className={styles.sidebarmenu}>
          <li>
            <a href="#" onClick={handleButtonClickHome}>Início</a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>Buscar</a>
          </li>
          <li>
            <a href="#" onClick={hendleClickBiblioteca}>Biblioteca</a>
          </li>
          <li>
            <a href="#" onClick={handleButtonClickVideo}>Assistir Videos</a>
          </li>
        </ul>
      </div>
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
