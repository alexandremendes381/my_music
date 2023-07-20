import React, { useContext, useState } from 'react';
import { UserContext } from '../../hooks/userContext/userContext';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ModalAccount from '../modalAccount';
import UseNewLogin from '../../hooks/userNewLoguin/useNewLoguin';

function Account() {
  const { handleUpdateData
  } = UseNewLogin()



  const { userData } = useContext(UserContext);
  const openlogin = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleLogout = () => {

    localStorage.removeItem('userData');
    openlogin('/');

  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleToggleModalClose = () => {
    setIsOpenModal(false);
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
            <Button onClick={handleToggleModal}>Minha Conta</Button>
            <Button onClick={handleLogout}>Sair</Button>
          </div>
        </div>
      )}
      <div>
        <ModalAccount
          handleLogout={handleLogout}
          isOpenModal={isOpenModal}
          handleToggleModal={handleToggleModal}
          handleToggleModalClose={handleToggleModalClose}
          handleUpdateData= {handleUpdateData}
        />
      </div>
    </div>
  );
};

export default Account;
