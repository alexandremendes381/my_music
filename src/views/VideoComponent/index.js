import styles from './index.module.scss';
import { FaPause, FaPlay, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa';
import useNewVideo from '../../hooks/userNewVideo/useNewVideo';
import ModalVideo from '../modalVideo';

function VideoPlayer({ isOpenModal, setisOpenModal }) {
  const {
    handleVideoClick,
    handleVideoEnd,
    videoRef,
    handleTimeUpdate,
    handlePrev,
    isPlaying,
    handlePause,
    handlePlay,
    handleNext,
    handleSeek,
    volume,
    handleVolumeChange,
    videoTracks,
    currentTime,
    handleTrackClick,
  } = useNewVideo();

  const currentTrack = videoTracks.find((track) => track.src === videoRef.current.src);

  return (
    <div className={styles.AppHome}>
      <div className={styles.container}>
        <div className={styles.videoplayer}>
          <video ref={videoRef} onTimeUpdate={handleTimeUpdate} onEnded={handleVideoEnd} onClick={handleVideoClick}>
            {videoTracks.map((track) => (
              <source key={track.id} src={track.src} type="video/mp4" />
            ))}
          </video>
        </div>
        <div className={styles.albumartist}>
          {currentTrack && <h3>{currentTrack.title}</h3>}
        </div>
        <div className={styles.audioplayercontainer}>
          <button className={styles} onClick={handlePrev}>
            <FaStepBackward />
          </button>
          {isPlaying ? (
            <button className={styles.controliconnext} onClick={handlePause}>
              <FaPause className={styles.controlIcon} />
            </button>
          ) : (
            <button className={styles.controliconnext} onClick={handlePlay}>
              <FaPlay className={styles.controlIcon} />
            </button>
          )}
          <button className={styles} onClick={handleNext}>
            <FaStepForward />
          </button>
          <input
            className={styles.duration}
            type="range"
            min="0"
            max={videoRef.current ? videoRef.current.duration : 0}
            step="0.01"
            value={currentTime}
            onChange={handleSeek}
          />
          <div>
            <button type="button">
              <FaVolumeUp />
            </button>
          </div>
          <input
            className={styles.volume}
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
      <div>
        <ModalVideo
          videoTracks={videoTracks}
          isOpenModal={isOpenModal}
          setisOpenModal={setisOpenModal}
          handleTrackClick={handleTrackClick}
          currentTime={currentTime}
        />
      </div>
    </div>
  );
}

export default VideoPlayer;
