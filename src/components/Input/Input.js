import React from 'react'
import styles from './index.module.scss'

function Input({ children, autoComplete, ...restProps}) {
  return (
    <div className={styles.custominput }>
      <input {...restProps} autoComplete={autoComplete} />
    </div>
  );
}

export default Input
