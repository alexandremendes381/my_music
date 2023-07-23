import styles from './index.module.scss';
import Input from '../../components/Input/Input';
import mar from '../../assets/images/mar.mp4'
import UseNewCadastro from '../../hooks/userNewCadastro/useNewCadastro';


function ScreenCadastro() {
  const {
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
    name,
    selfie,
    handleFileChange,
    handleButtonClickTerms,
    setTerms,
    terms,
  } = UseNewCadastro()



  return (
    <div>
      <div className={styles.videoBackground}>
        <video autoPlay loop muted className={styles.video} preload="auto">
          <source src={mar} type="video/mp4" />
        </video>

      </div>
      <header className={styles.container}>

        <div >
          <form onSubmit={handleFormSubmit} encType="multipart/form-data">

            <div className={styles.containerimg}>
              <label htmlFor="fileInput">
                {selfie ? (
                  <img
                    type="multipart/form-data"
                    src={selfie}
                    alt="Selfie"
                    className={styles.imagemPlaceholder}
                  />
                ) : (
                  <div className={styles.imagemPlaceholder} />
                )}
              </label>
              <input
                type="file"
                id="fileInput"
                className={styles.inputimg}
                onChange={handleFileChange}
              />
            </div>

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
              <label htmlFor="date">Data de Nascimento:</label>
              <Input
                type="date"
                id="birthdate"
                name="birthdate"
                min="0000-01-01"
                max="9999-12-31"
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
              <div >
                {cep && (
                  <button className={styles.button} onClick={handleButtonClickCep}>
                    Buscar
                  </button>
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
            <div>
              <input
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
              />
              <span>Aceitar termos de uso</span>
              <button href="/Terms" target="_blank" onClick={handleButtonClickTerms} className={styles.buttoncenter} >leia-me</button>
            </div>
            <div className={styles.divContainercenter}>
              <button className={styles.buttoncenter} type="submit" >criar conta</button>
            </div>
            <div className={styles.divContainercenter}>
              <button className={styles.button} onClick={handleButtonClickHome}>
                voltar
              </button>
            </div>
          </form>
        </div>
      </header >
    </div >
  )
}


export default ScreenCadastro