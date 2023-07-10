import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastInfo, toastSuccess } from "../../utils/ToastInfo";
import axios from 'axios';
import * as yup from "yup";

function UseNewLogin() {
  const [linkedinURL] = useState('www.linkedin.com/in/alexandre-mendes-8b8473240');
  const [githubURL] = useState('www.github.com/alexandremendes381');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const menu = useNavigate();
  const newpassword = useNavigate();
  const handleButtonClick = () => {
    navigate('/Cadastro');
  };

  const handleButtonClickHome = () => {
    menu('/Menu');
  };
  const handleButtonClickPassword = () => {
    newpassword('/newPassword')
  }
  const linkedinOnClick = () => {
    window.open(`https://${linkedinURL}`, '_blank');
  };

  const GithubOnClick = () => {
    window.open(`https://${githubURL}`, '_blank');
  };


  const handleButtonClickLogin = async (e) => {
    e.preventDefault();
  
    try {
      await schema.validate({ email, password });
  
      axios.get('http://127.0.0.1:8000/cadastro/', {
        params: {
          email: email,
          password: password
        },
      })
        .then((res) => {
          if (Object.keys(res.data).length !== 0) {
            toastSuccess('Logado com sucesso!');
            handleButtonClickHome();
          } else {
            toastInfo('Não foi possível Logar');
          }
        })
        .catch((error) => {
          console.error(error);
          toastInfo('E-mail ou Senha incorretos');
        });
    } catch (error) {
      console.error(error);
      toastInfo(error.message);
    }
  };


  return {
    linkedinOnClick,
    GithubOnClick,
    handleButtonClick,
    handleButtonClickHome,
    handleButtonClickLogin,
    setPassword,
    setEmail,
    email,
    password,
    handleButtonClickPassword,
  };
}
const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

export default UseNewLogin;
