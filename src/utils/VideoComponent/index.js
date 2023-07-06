import React, { useRef, useState } from 'react';
import  styles from './index.module.scss';
import Elvis_Presley_Fever from '../../assets/images/Elvis_Presley_Fever.mp4';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className={styles.AppHome}>
      <div className={styles.container}>
        <div className={styles.videoplayer}>
          <video ref={videoRef}>
            <source src={Elvis_Presley_Fever} type="video/mp4" />
          </video>
        </div>
        <div className="audio-player-container">
          <button>
            <FaStepBackward />
          </button>
          {isPlaying ? (
              <button className={styles.controlButton} onClick={handlePause}>
                <FaPause className={styles.controlIcon} />
              </button>
            ) : (
              <button className={styles.controlButton} onClick={handlePlay}>
                <FaPlay className={styles.controlIcon} />
              </button>
            )}
          <button >
            <FaStepForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
