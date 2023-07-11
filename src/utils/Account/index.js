import React from 'react';
import styles from './index.module.scss';

function Account() {
  return (
    <div>
      <select className={styles['ball-input']}>
        <option value="option1">Opção 1</option>
        <option value="option2">Opção 2</option>
        <option value="option3">Opção 3</option>
      </select>
    </div>
  );
}

export default Account;
