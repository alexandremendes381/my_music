import React, { useContext, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import ReactModal from 'react-modal'
import axios from 'axios';
import { UserContext } from '../../hooks/userContext/userContext';
import styles from './index.module.scss'
import { toastSuccess } from '../../utils/ToastInfo';
import InputNew from '../../components/InputNew/InputNew';

function ModalAccount({ isOpenModal, handleToggleModal, handleToggleModalClose, handleUpdateData }) {
  const { userData } = useContext(UserContext);
  const userId = userData && userData[0].id;

  const [name, setName] = useState(userData && userData[0].name);
  const [email, setEmail] = useState(userData && userData[0].email);
  const [telephone, setTelephone] = useState(userData && userData[0].telephone);
  const [cep, setCep] = useState(userData && userData[0].cep);
  const [city, setCity] = useState(userData && userData[0].city);
  const [birthdate, setBirthdate] = useState(userData && userData[0].birthdate);
  const [uf, setUf] = useState(userData && userData[0].uf);
  const [bairro, setBairro] = useState(userData && userData[0].bairro);

  useEffect(() => {

    axios
      .get(`http://127.0.0.1:8000/cadastro/${userId}/`)
      .then((response) => {
        const updatedUserData = response.data;
        setName(updatedUserData.name);
        setEmail(updatedUserData.email);
        setTelephone(updatedUserData.telephone);
        setCep(updatedUserData.cep);
        setCity(updatedUserData.city);
        setBirthdate(updatedUserData.birthdate);
        setUf(updatedUserData.uf);
        setBairro(updatedUserData.bairro);
      })
      .catch((error) => {
        console.error('Error fetching updated user data:', error);
      });
  }, [userId]);

  const handleSaveChanges = () => {
    axios
      .patch(`http://127.0.0.1:8000/cadastro/${userId}/`, {
        name,
        email,
        telephone,
        cep,
        city,
        birthdate,
        uf,
        bairro,
      })
      .then((response) => {
        toastSuccess('Dados atualizados com sucesso!');
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao atualizar os dados:', error);
      });
  };
  const handleCombinedAction = async (e) => {
    await handleUpdateData(e);
    await handleSaveChanges(e);
  };


  function formatDate(dateString) {
    // Valida se a data está no formato esperado "yyyy-MM-dd"
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
      // Se não estiver no formato correto, retorna uma data padrão ou uma string vazia, como preferir
      return ""; // ou poderia ser "0000-00-00" ou outra data padrão
    }

    // Converte o valor em milissegundos para uma data
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }


  return (
    <ReactModal
      isOpen={isOpenModal}
      onRequestClose={handleToggleModal}
      className={styles.container}
      overlayClassName={styles.ReactModalOverlay}
      contentLabel="Manage Account Modal"
    >
      <div className={styles.modalContent}>
        <h2>Minha Conta</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <InputNew
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <InputNew
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telephone">Telefone:</label>
          <InputNew
            type="text"
            id="telephone"
            value={telephone}
            onChange={e => setTelephone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cep">CEP:</label>
          <InputNew
            type="text"
            id="cep"
            value={cep}
            onChange={e => setCep(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="city">Cidade:</label>
          <InputNew
            type="text"
            id="city"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="birthdate">Data de Nascimento:</label>
          <InputNew
  type="date"
  min="0000-01-01"
  max="9999-12-31"
  id="birthdate"
  value={formatDate(birthdate)}
  onChange={(e) => setBirthdate(e.target.value)}
  disabled // Adiciona o atributo disabled para desativar o campo
/>

        </div>
        <div>
          <label htmlFor="uf">UF:</label>
          <InputNew
            type="text"
            id="uf"
            value={uf}
            onChange={e => setUf(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bairro">Bairro:</label>
          <InputNew
            type="text"
            id="bairro"
            value={bairro}
            onChange={e => setBairro(e.target.value)}
          />
        </div>
        <Button className="w-100" onClick={handleCombinedAction}>Salvar</Button>
        <Button onClick={handleToggleModalClose}>Fechar</Button>
      </div>
    </ReactModal>
  )
}

export default ModalAccount
