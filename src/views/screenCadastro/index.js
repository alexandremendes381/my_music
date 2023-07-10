import styles from './index.module.scss';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import capa from '../../assets/images/capa.jpg'
import home from '../../assets/images/home.jpg'
import cadastro from '../../assets/images/cadastro.jpg'
import { Carousel } from 'react-responsive-carousel';


import ButtonHome from '../../components/ButtonHome/ButtonHome';
import UseNewCadastro from '../../hooks/useNewCadastro/useNewCadastro';

function ScreenCadastro() {
  const{
    handleFormSubmit,
    handleButtonClickHome,
    setPassword,
    uf,
    setName,
    birthdate,
    setBirthdate,
    cep,
    setCep,
    handleButtonClickCep,
    city,
    setCity,
    setuf,
    bairro,
    setBairro,
    country,
    setCountry,
    telephone,
    setTelephone,
    email,
    setEmail,
    password,
    name
}=UseNewCadastro()

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
              <label htmlFor="telephone">Data de Nascimento:</label>
              <Input
                type="date"
                id="birthdate"
                name="birthdate"
                placeholder="Digite Sua Data de Nascimento"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <div className={styles.divnew}>
              <label htmlFor="cep">CEP:</label>
              <Input
                type="text"
                id="cep"
                name="cep"
                mask="99999-999"
                placeholder="Digite seu CEP"
                autoComplete="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
            <div>
            <div className={styles.divnewbutton}>
              {cep && (
                <ButtonHome onClick={handleButtonClickCep}>
                  Buscar
                </ButtonHome>
              )}
            </div></div>
            <div className={styles.divnew}>
              <label htmlFor="city">Cidade:</label>
              <Input
                type="text"
                id="city"
                name="city"
                placeholder="Digite sua Cidade"
                autoComplete="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className={styles.divnew}>
              <label htmlFor="city">Uf:</label>
              <Input
                type="text"
                id="uf"
                name="uf"
                placeholder="Uf"
                autoComplete="uf"
                value={uf}
                onChange={(e) => setuf(e.target.value)}
              />
            </div>
            <div className={styles.divnew}>
              <label htmlFor="bairro">Bairro:</label>
              <Input
                type="text"
                id="bairro"
                name="bairro"
                placeholder="Digite seu Bairro"
                autoComplete="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </div>
            <div className={styles.divnew}>
              <label htmlFor="pais">País:</label>
              <Input
                type="text"
                id="pais"
                name="pais"
                placeholder="Digite seu País"
                autoComplete="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className={styles.divnew}>
              <label htmlFor="telephone">Telefone:</label>
              <Input
                type="text"
                id="telephone"
                name="telephone"
                mask="(99) 9999-9999"
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


export default ScreenCadastro