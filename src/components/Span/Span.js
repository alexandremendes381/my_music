import React from 'react'
import styles from'./index.module.scss'

function Span({children}) {
  return (
    <div className={styles.span}>
      <span>{children}</span>
    </div>
  )
}

export default Span
