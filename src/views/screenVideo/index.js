import React from 'react'
import VideoPlayer from '../../utils/VideoComponent'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom';

function ScreenVideo() {
    const Home = useNavigate();
    const Video = useNavigate();

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
            <a href="#" >Biblioteca</a>
          </li>
          <li>
            <a href="#" onClick={handleButtonClickMusic}>Ouvir musicas</a>
          </li>
        </ul>
      </div>
        </div>
      <VideoPlayer/>
    </div>
  )
}

export default ScreenVideo
