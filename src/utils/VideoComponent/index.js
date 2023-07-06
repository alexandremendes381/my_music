import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { FaPause, FaPlay, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa';
import axios from 'axios';
import { toastInfo, toastSuccess } from '../ToastInfo';

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoTracks, setVideoTracks] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1); // Estado para controlar o volume do vídeo
  const videoRef = useRef(null);

  useEffect(() => {
    fetchVideoTracks();
  }, []);

  const fetchVideoTracks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/videos/');
      const data = response.data;
      const fetchedVideoTracks = data.map((item) => ({
        id: item.id,
        src: item.video_file,
        title: item.title,
      }));
      setVideoTracks(fetchedVideoTracks);
      toastSuccess('Dados encontrados com sucesso!');
    } catch (error) {
      console.error(error);
      toastInfo('Erro ao buscar os dados');
    }
  };

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleNext = () => {
    const currentIndex = videoTracks.findIndex((track) => track.src === videoRef.current.src);
    const nextIndex = (currentIndex + 1) % videoTracks.length;
    const nextTrack = videoTracks[nextIndex];
    if (nextTrack) {
      videoRef.current.src = nextTrack.src;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    const currentIndex = videoTracks.findIndex((track) => track.src === videoRef.current.src);
    const prevIndex = (currentIndex - 1 + videoTracks.length) % videoTracks.length;
    const prevTrack = videoTracks[prevIndex];
    if (prevTrack) {
      videoRef.current.src = prevTrack.src;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleVideoEnd = () => {
    handleNext();
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

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
        <div className={styles.title}>
        {videoTracks.length > 0 && (
            <h3>{videoTracks.find((track) => track.src === videoRef.current.src)?.title}</h3>
          )}
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
    </div >
  );
}

export default VideoPlayer;
