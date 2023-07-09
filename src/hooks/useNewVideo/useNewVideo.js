import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toastInfo, toastSuccess } from "../../utils/ToastInfo";



function useNewVideo() {
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
                imagem_play: item.imagem_play,
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

    const handleTrackClick = (index) => {
        const track = videoTracks[index];
        if (track) {
          videoRef.current.src = track.src;
          videoRef.current.play();
          setIsPlaying(true);
          setCurrentTime(0); // Reiniciar o tempo para o início do vídeo
        }
      };      
    
    return {
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
        setVideoTracks,
        handleTrackClick,
        setCurrentTime
    }
}

export default useNewVideo
