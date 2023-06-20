import React, { useState } from 'react'
import elvis_presleyPost from '../../assets/images/elvis_presleyPost.jpg'
import styles from './index.module.scss'

function ScreenPost() {
    const [youtube] = useState('www.youtube.com/watch?v=xdLlk7NYGAA&ab_channel=OLDTAPES')

    const onClickyoutube = () => {
        window.open(`https://${youtube}`, '_blanc')
    }

    return (
        <div>
            <div className={styles.container}>
                <img src={elvis_presleyPost} alt="img" className={styles.image} />
            </div>
            <div className={styles.textimg}>
                <button onClick={onClickyoutube}
                    style={{ border: 'none', backgroundColor: '#fff' }}>
                    <h2>Can't Help Falling In Love (youtube)</h2></button>
                <p>Wise men say
                    Only fools, only fools rush in
                    Oh, but I, but I, I can't help falling in love with you
                    Shall I stay?
                    Would it be, would it be a sin?
                    If I can't help falling in love with you
                    Like a river flows
                    Surely to the sea
                    Darling, so it goes
                    Some things, you know, are meant to be
                    Take my hand
                    Take my whole life too
                    For I can"t help falling in love with you
                    For I can"t help falling in love with you
                    Yeah
                </p>
            </div>
            <div>
            </div>
        </div>
    )
}

export default ScreenPost
