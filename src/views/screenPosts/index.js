import React, { useState } from 'react'

import styles from './index.module.scss'
import linkedin from '../../assets/logos/linkedin.webp'
import github from '../../assets/logos/github.png'
import Tooltip from '../../components/Tooltip/Tooltip'

function ScreenPost() {
    const [linkedinURL] = useState('www.linkedin.com/in/alexandre-mendes-8b8473240');
    const [githubURL] = useState('www.github.com/alexandremendes381');
    const linkedinOnClick = () => {
        window.open(`https://${linkedinURL}`, '_blank');
      };
    
      const GithubOnClick = () => {
        window.open(`https://${githubURL}`, '_blank');
      };

    return (
        <div>

            <div className={styles.container}>

                <header className={styles.header}>
                </header>
                <div className={styles.divButton}>
                    <h2>Supreme Songs</h2>
                </div>
                <div className={styles.divnew}>
                <h3>Visite Minhas Contas
                </h3>
               </div> 
               <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <div>
            <Tooltip text="Perfil do LinkedIn">
              <button onClick={linkedinOnClick} type="text">
                <img
                  src={linkedin}
                  alt="Linkedin"
                  style={{ width: '20px' }}
                />
              </button>
            </Tooltip>
          </div>

          <div>
            <Tooltip text="Perfil do Github">
              <button onClick={GithubOnClick} type="text">
                <img
                  src={github}
                  alt="Github"
                  style={{ width: '20px' }}
                />
              </button>
            </Tooltip>
          </div>
        </div>
            </div>
        </div>
    )
}

export default ScreenPost
