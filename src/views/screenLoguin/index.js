import styles from './index.module.scss';
import Button from '../../components/Button/Button.js';
import Input from '../../components/Input/Input';
import { Carousel } from 'react-responsive-carousel';
import capa from '../../assets/images/capa.jpg'
import home from '../../assets/images/home.jpg'
import linkedin from '../../assets/logos/linkedin.webp'
import github from '../../assets/logos/github.png'
import cadastro from '../../assets/images/cadastro.jpg'
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import Tooltip from '../../components/Tooltip/Tooltip';
import UseNewLoguin from '../../hooks/useNewLoguin/useNewLoguin'

function ScreenLogin() {
  const {
    linkedinOnClick,
    GithubOnClick,
    handleButtonClick,
    handleButtonClickLogin,
    setPassword,
    setEmail,
    email,
    password
  } = UseNewLoguin()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Carousel fade>
          <div>
            <img src={capa} alt="Imagem 1" />
            <p className="legend">Legenda 1</p>
          </div>
          <div>
            <img src={home} alt="Imagem 2" />
            <p className="legend">Legenda 2</p>
          </div>
          <div>
            <img src={cadastro} alt="Imagem 3" />
            <p className="legend">Legenda 3</p>
          </div>
        </Carousel>
      </header>
      <div className='mt-3'>

        <div className={styles.divButton}>
          <ButtonHome className='w-50'>
            Home
          </ButtonHome>
          <ButtonHome className='w-50'>
            About
          </ButtonHome>
          <ButtonHome className='w-50'>
            Contact
          </ButtonHome>
          <ButtonHome className='w-50'>
            Blog
          </ButtonHome>
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

        <div className={styles.divButton}>
          <div>
            <label htmlFor="email">E-mail:</label>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu email"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className='w-100'>Senha:</label>
            <Input
             type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.divnew}>
          <div style={{ marginTop: '10px' }}>
            <Button onClick={handleButtonClickLogin} >
              Login
            </Button>
          </div>
          <div>
            <Button>
              Trocar senha?
            </Button>
          </div>

          <div>
            <Button onClick={handleButtonClick}>criar conta</Button>
          </div>

        </div>
      </div>
    </div>

  );
}

export default ScreenLogin