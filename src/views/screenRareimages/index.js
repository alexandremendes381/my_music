import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { FiMenu } from 'react-icons/fi';
import { GiExitDoor } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

function ScreenRareImages() {
    const [images, setImages] = useState([]);
    const Menu = useNavigate();
    const Sair = useNavigate();

    const onclicSair = () => {
        Sair('/')
    }

    const onclicMenu = () =>{
        Menu('/MenuPrincipal')
    } 

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/ImagesRare/")
            .then(function (response) {
                console.log(response.data);
                setImages(response.data);
            })
            .catch(function (error) {
                // Aqui temos acesso ao erro quando algo inesperado acontece:
                console.log(error);
            });
    }, []); // Passa um array de dependências vazio para garantir que o useEffect seja executado apenas uma vez

    return (
        <div>
            <div className={styles.screenrareimages}>
                {images.map((post, index) => (
                    <div key={index}>
                        <img className={styles.img} src={post.images} alt="Imagem da Postagem" />
                    </div>
                ))}
                <div className={styles.button}>
                    <button type="#" onClick={onclicMenu}>
                        <FiMenu />
                        Menu Principal
                    </button>
                    <button type="#" onClick={onclicSair}>
                        <GiExitDoor />
                        Sair
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ScreenRareImages;
