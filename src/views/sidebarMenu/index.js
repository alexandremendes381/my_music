import React, { useState } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

function SidebarMenu({ handleButtonClick }) {
  const [showDivs, setShowDivs] = useState(false);
  const Home = useNavigate();

  const handleButtonClickHome = () => {
    Home('/');
  };
  const handleLinkClick = () => {
    setShowDivs(!showDivs);
    handleButtonClick(); 
  };

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
          <a href="#">Biblioteca</a>
        </li>
        <li>
          <a href="#">Criar playlist</a>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default SidebarMenu;
