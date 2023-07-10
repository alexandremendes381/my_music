import React, { useState } from 'react';
import styles from './index.module.scss';
import Input from '../../components/Input/Input';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import Button from '../../components/Button/Button';
import capa from '../../assets/images/capa.jpg';
import home from '../../assets/images/home.jpg';
import cadastro from '../../assets/images/cadastro.jpg';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

function ScreenNewPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const initial = useNavigate();

  const handleButtonClick = () => {
    initial('/');
  };
  const handleEmailConfirmation = async (e) => {
    e.preventDefault(); // Impede o recarregamento do formulário

    try {
      // Fazer a chamada GET para confirmar o email existente
      const response = await fetch(`http://127.0.0.1:8000/cadastro/?email=${email}`);

      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          setEmailConfirmed(true);
          setErrorMessage('');
        } else {
          setErrorMessage('Email não encontrado. Por favor, verifique o email informado.');
        }
      } else {
        setErrorMessage('Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde.');
      }
    } catch (error) {
      setErrorMessage('Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde.');
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault(); // Impede o recarregamento do formulário

    try {
      // Fazer a chamada PATCH para atualizar a senha
      const response = await fetch(`http://127.0.0.1:8000/cadastro/update_password/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });


      if (response.ok) {
        // Redirecionar para a tela de sucesso ou exibir mensagem de sucesso
        console.log('Senha atualizada com sucesso!');
      } else {
        setErrorMessage('Ocorreu um erro ao atualizar a senha. Por favor, tente novamente.');
      }
    } catch (error) {
      setErrorMessage('Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <header className={styles.container}>
        <div>
          <form onSubmit={handleEmailConfirmation}>
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
            <div className={styles.divnew}>
              <label htmlFor="email">E-mail:</label>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Digite seu email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {!emailConfirmed ? (
              <div className={styles.divButton}>
                <Button type="submit">Confirmar E-mail</Button>
              </div>
            ) : (
              <div className={styles.divnew}>
                <label htmlFor="password">Nova Senha:</label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Digite sua nova senha"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            <div className={styles.divButton}>
              {emailConfirmed && (
                <Button type="submit" onClick={handlePasswordChange}>
                  Atualizar Senha
                </Button>
              )}
              <div>
                <ButtonHome
                  onClick={handleButtonClick}
                >voltar</ButtonHome>
              </div>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default ScreenNewPassword;
