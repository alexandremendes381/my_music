import React from 'react'
import styles from './index.module.scss'
function Loading() {
    const [loading, setLoading] = useState(false);
    return (
        <div className={styles.loading}>
      {/* Conteúdo do componente de loading */}
    </div>
    )
}

export default Loading