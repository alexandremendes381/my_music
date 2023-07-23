import styles from './index.module.scss';
import UseNewLoguin from '../../hooks/userNewLoguin/useNewLoguin'

function ScreenLogin() {
  const {
    handleButtonClick,
    handleButtonClickLogin,
    setPassword,
    setEmail,
    email,
    password,
    handleButtonClickPassword,

  } = UseNewLoguin()

  return (
    <div className={styles.container}>
      <div className='mt-3'>
        <div className={styles.divnew}>
         <h1>Login</h1> 
        </div>
        
        <div>
          <div className={styles.inputContainer}>
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Username"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password" className='w-100'></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <div >
            <button onClick={handleButtonClickLogin} className={styles.loginButton}>
              Login
            </button>
          </div>
          <div style={{ flex: 1 }}>
            <button onClick={handleButtonClickPassword}>
            Esqueceu a senha?
            </button>
          </div>
          <div style={{ flex: 1 }}>
            <button onClick={handleButtonClick}>Nova Conta?</button>
          </div>
        </div>

      </div>
    </div>

  );
}

export default ScreenLogin