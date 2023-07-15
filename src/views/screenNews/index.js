import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import axios from 'axios';
import { toastInfo, toastSuccess } from '../../utils/ToastInfo';

function ScreenNews() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/posts/')
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

  return (
    <div className={styles.background}>
      <div className={styles.postContainer}>
        {posts.map((post, index) => (
          <div className={styles.post} key={post.id}>
            {index % 2 === 0 ? (
              <>
                <div className={styles.textContainer}>
                  <p className={styles.text}>{post.texto}</p>
                </div>
                <img className={styles.image} src={post.arquivo} alt="Imagem da Postagem" />
              </>
            ) : (
              <>
                <img className={styles.image} src={post.arquivo} alt="Imagem da Postagem" />
                <div className={styles.textContainer}>
                  <p className={styles.text}>{post.texto}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScreenNews;
