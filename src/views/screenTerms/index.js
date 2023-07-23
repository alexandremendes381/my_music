import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toastInfo, toastSuccess } from '../../utils/ToastInfo';
import styles from './index.module.scss'
import { GiExitDoor } from 'react-icons/gi';
import { Navigate, useNavigate } from 'react-router-dom';
function ScreenTerms() {
    const [posts, setPosts] = useState('');
    const navigate = useNavigate();

    const hendleButtonClickHome = () => {
        navigate('/')
    }

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/terms/')
            .then(function (response) {
                console.log(response.data);
                setPosts(response.data);
                toastSuccess('Sucesso');
            })
            .catch(function (error) {
                console.log(error);
                toastInfo('Erro');
            });
    }, []);

    console.log(posts);

    return (
        <div>
            <button type="#"  className={styles.button} onClick={hendleButtonClickHome}>
                <GiExitDoor />
                Sair
            </button>
            <p className={styles.p}>
                {posts && posts.length > 0 ? posts[0].termosText : 'Carregando...'}
            </p>
        </div>
    );
}

export default ScreenTerms;

