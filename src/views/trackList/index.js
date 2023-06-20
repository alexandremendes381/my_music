import React from 'react';
import styles from './index.module.scss';

const TrackList = ({ tracks }) => {
  return (
    <div className={styles.tracklist}>
      <h2>Listagem de Faixas</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <h3>{track.title}</h3>
            <p>{track.artist}</p>
            <p>{track.album}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
