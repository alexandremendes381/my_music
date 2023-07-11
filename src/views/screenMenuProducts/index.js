import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import Account from '../../utils/Account';

function ScreenMenuProducts() {
  const [isLoading, setIsLoading] = useState(true);
    const Music = useNavigate()
    const Video = useNavigate()

    const hendleclickVideo = () => {
        Video('/video')
    }

    const hendleclickMusic = () => {
        Music('/Menu')
    }


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div id="app-containerScreen">
      <div id="backgroundScreen">
        <div>
          <Account/>
        </div>
      <div className={styles.centeredtext}>
            <h1>Welcome to Supreme Songs</h1>
            <div>
        <button type="text"
         className={styles.loginButton}
         onClick={hendleclickMusic}
         >
            Ouvir Musicas
        </button>
        </div>
        <button type="text"
        onClick={hendleclickVideo}
        className={styles.loginButton}>
            Assistir Videos
        </button>
        <div>
        </div>
        </div>
        </div>
        </div>
      )}
      <p>Novidades na pagina </p>
    </div>
  );
}

export default ScreenMenuProducts;
