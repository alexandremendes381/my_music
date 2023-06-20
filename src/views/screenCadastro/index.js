import React, { useState } from 'react'
import styles from './index.module.scss';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import axios from 'axios';
import { toastInfo, toastSuccess } from '../../utils/ToastInfo/index.js';
import capa from '../../assets/images/capa.jpg'
import home from '../../assets/images/home.jpg'
import cadastro from '../../assets/images/cadastro.jpg'
import { Carousel } from 'react-responsive-carousel';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import ButtonHome from '../../components/ButtonHome/ButtonHome';

function ScreenCadastro() {
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Login = useNavigate();
  const handleButtonClickHome = () => {
    Login('/');
  };

  const handleButtonClickCadastro = async () => {
    try {
      await schema.validate({ email, password , name, telephone});

      axios
        .post('http://127.0.0.1:8000/cadastro/', {
          name,
          telephone,
          email,
          password,
        })
        .then(() => {
          toastSuccess('Seu cadastro foi criado com sucesso!');
          setName('');
          setTelephone('');
          setEmail('');
          setPassword('');
          handleButtonClickHome()
        })
        .catch(() => {
          toastInfo('Não foi possível criar o cadastro');
        });
    } catch (error) {
      console.error(error);
      toastInfo(error.message);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleButtonClickCadastro()
  };

  return (
    <div>
      <header className={styles.container}>
        <div >
          <form onSubmit={handleFormSubmit}>
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
              <label htmlFor="email">Nome:</label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu Nome completo"
                autoComplete="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className={styles.divnew}>
              <label htmlFor="telephone">Telefone:</label>
              <Input
                type="text"
                id="telephone"
                name="telephone"
                placeholder="Digite seu Telefone"
                autoComplete="telephone"
                value={telephone}
                onChange={e => setTelephone(e.target.value)}
              />
            </div>
            <div className={styles.divnew}>
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
            <div className={styles.divnew}>
              <label htmlFor="password">Senha:</label>
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
            <div className={styles.divButton}>
              <Button type="submit" >criar conta</Button>
              <div>
              <ButtonHome onClick={handleButtonClickHome}>
                voltar
              </ButtonHome>
            </div>
            </div>
            
          </form>
        </div>
      </header>
    </div>
  )
}
const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
  name: yup.string().required('E-mail é obrigatório'),
  telephone: yup.number().required('Telefone é obrigatório'),
});

export default ScreenCadastro