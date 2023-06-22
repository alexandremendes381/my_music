import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-audio-player';
import './AudioPlayerComponent.css';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import SidebarMenu from '../sidebarMenu';
import axios from 'axios';
import { toastInfo, toastSuccess } from "../../utils/ToastInfo";

const AudioPlayerComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDivs, setShowDivs] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const handleButtonClick = () => {
    setShowDivs(!showDivs);
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/arquivos/');
      const data = response.data;

      console.log('Dados recebidos:', data);

      const fetchedTracks = data.map((item) => ({
        id: item.id,
        src: item.music_play,
        image: item.imagem_play,
        title: item.title,
        artist: item.artist,
      }));

      console.log('Tracks:', fetchedTracks);

      setTracks(fetchedTracks);

      toastSuccess('Dados recuperados com sucesso!');
    } catch (error) {
      console.error(error);
      toastInfo('Erro ao buscar os dados');
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  return (
    <div>
      TrackList
      {showDivs && (
        <>
          <div className="custom-input album-input">
            <input type="text" placeholder="Digite aqui" />
            <span className="input-highlight"></span>
          </div>
          <div className="d-flex album-button">
            <ButtonHome>Filtrar</ButtonHome>
          </div>
        </>
      )}
       
       <h1 className="album-artist" >{tracks[currentTrackIndex]?.artist}</h1>
      <div>
        <img src={tracks[currentTrackIndex]?.image} alt="Album Cover" className="album-image" />
      </div>
      <div className="audio-player-container">
        <div className="track-controls">
          <button className="control-button" onClick={handlePrev}>
            <span className="control-icon">&lt;</span>
            
          </button>
        </div>
        <AudioPlayer
          src={tracks[currentTrackIndex]?.src}
          autoPlay={true}
          controls
          onPlay={handlePlay}
          onPause={handlePause}
        />
        <button className="control-button" onClick={handleNext}>
          <span className="control-icon">&gt;</span>
        </button>
      </div>
      <SidebarMenu handleButtonClick={handleButtonClick} tracks={tracks} currentTrackIndex={currentTrackIndex}/>
    </div>
  );
};

export default AudioPlayerComponent;
