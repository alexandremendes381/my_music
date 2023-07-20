import React from 'react';
import styles from './index.module.scss';
import InputMask from 'react-input-mask';

function InputNew({ children, autoComplete, maxLength, mask, ...restProps }) {
  return (
    <div className={styles.inputContainer}>
      {mask ? (
        <InputMask {...restProps} autoComplete={autoComplete} mask={mask} />
      ) : (
        <input {...restProps} autoComplete={autoComplete} maxLength={maxLength} />
      )}
    </div>

  );
}

export default InputNew;
