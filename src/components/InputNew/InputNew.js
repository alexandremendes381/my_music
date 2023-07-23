import React from 'react';
import styles from './index.module.scss';
import InputMask from 'react-input-mask';

function InputNew({ type, mask, autoComplete, maxLength, ...restProps }) {
  return (
    <div className={styles.inputContainer}>
      {mask ? (
        <InputMask {...restProps} autoComplete={autoComplete} mask={mask} />
      ) : type === 'date' ? (
        <input type="date" {...restProps} autoComplete={autoComplete} />
      ) : (
        <input type={type} {...restProps} autoComplete={autoComplete} maxLength={maxLength} />
      )}
    </div>
  );
}

export default InputNew;
