import React, { useContext, useState } from 'react';
import { UserContext } from '../../hooks/userContext/userContext';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ReactModal from 'react-modal';
import axios from 'axios';

const Account = () => {
  const { userData, setUserData } = useContext(UserContext);
  const openlogin = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [name, setName] = useState(userData && userData[0].name);
  const [email, setEmail] = useState(userData && userData[0].email);
  const [telephone, setTelephone] = useState(userData && userData[0].telephone);
  const [cep, setCep] = useState(userData && userData[0].cep);
  const [city, setCity] = useState(userData && userData[0].city);
  const [birthdate, setBirthdate] = useState(userData && userData[0].birthdate);
  const [uf, setUf] = useState(userData && userData[0].uf);
  const [bairro, setBairro] = useState(userData && userData[0].bairro);
  const userId = userData && userData[0].id;

  const handleLogout = () => {
    setUserData(null); // Reset user data in the context
    localStorage.removeItem('userData'); // Remove data from localStorage
    openlogin('/');
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleSaveChanges = () => {
    // Implemente aqui a lógica para enviar os dados atualizados através de um método PATCH
    // Você pode usar uma biblioteca como o axios para fazer a requisição PATCH

    // Exemplo de requisição PATCH usando axios
    axios.patch(`http://127.0.0.1:8000/cadastro/${userId}/`, {
      name,
      email,
      telephone,
      cep,
      city,
      birthdate,
      uf,
      bairro
    })
      .then(response => {
        // Lógica para lidar com a resposta da requisição PATCH
        console.log('Dados atualizados com sucesso!');
      })
      .catch(error => {
        // Lógica para lidar com erros na requisição PATCH
        console.error('Ocorreu um erro ao atualizar os dados:', error);
      });
  };

  return (
    <div>
      <div className={styles['ball-input']}>
        {userData && (
          <img
            src={userData[0].selfie}
            alt=""
            onClick={handleToggle}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>
      {isOpen && (
        <div>
          <div className={styles['options']}>
            <span>Olá. {userData[0].name.split(" ")[0]}</span>
            <Button onClick={handleLogout}>Logout</Button>
            <Button onClick={handleToggleModal}>Manage account</Button>
            <ReactModal
              isOpen={isOpenModal}
              onRequestClose={handleToggleModal}
              contentLabel="Manage Account Modal"
            >
              <h2>Manage Account</h2>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="telephone">Telephone:</label>
                <input
                  type="text"
                  id="telephone"
                  value={telephone}
                  onChange={e => setTelephone(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="cep">CEP:</label>
                <input
                  type="text"
                  id="cep"
                  value={cep}
                  onChange={e => setCep(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="birthdate">Birthdate:</label>
                <input
                  type="text"
                  id="birthdate"
                  value={birthdate}
                  onChange={e => setBirthdate(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="uf">UF:</label>
                <input
                  type="text"
                  id="uf"
                  value={uf}
                  onChange={e => setUf(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="bairro">Bairro:</label>
                <input
                  type="text"
                  id="bairro"
                  value={bairro}
                  onChange={e => setBairro(e.target.value)}
                />
              </div>
              <Button onClick={handleSaveChanges}>Save Changes</Button>
              <Button onClick={handleLogout}>Logout</Button>
            </ReactModal>
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default Account;
