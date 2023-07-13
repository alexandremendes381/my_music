import React, { useContext, useState } from 'react';
import { UserContext } from '../../hooks/userContext/userContext';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
 import Button from '../../components/Button/Button';

const Account = () => {
  const { userData, setUserData } = useContext(UserContext);
  const openlogin = useNavigate();
  const [isOpen, setIsOpen] = useState(false);


  const handleLogout = () => {
    setUserData(null); // Reset user data in the context
    localStorage.removeItem('userData'); // Remove data from localStorage
    openlogin('/');
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
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
            <Button onClick={handleLogout}>Logout</Button>
            <Button >Manage account</Button>
          </div>
        </div>
      )}
      <div>
      </div>
    </div>
  );
}

export default Account;


