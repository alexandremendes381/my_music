import React from 'react';
import capa from '../../assets/images/capa.jpg';
import cadastro from '../../assets/images/cadastro.jpg';
import home from '../../assets/images/home.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './index.module.scss';

function CarouselImagens() {
  return (
    <div className={styles.carouselContainer}>
      <Carousel fade>
        <div>
          <img src={capa} alt="Imagem 1" />
          <p className="legend">Legenda 1</p>
        </div>
        <div>
          <img src={home} alt="Imagem 2" />
          <p className="legend">Legenda 2</p>
        </div>
        <div>
          <img src={cadastro} alt="Imagem 3" />
          <p className="legend">Legenda 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselImagens;
