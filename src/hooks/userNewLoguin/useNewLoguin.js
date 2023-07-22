import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastInfo, toastSuccess } from "../../utils/ToastInfo";
import axios from 'axios';
import * as yup from "yup";
import { UserContext } from "../userContext/userContext";

function UseNewLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userData, setUserData } = useContext(UserContext); // Separate state for userData
  const navigate = useNavigate();
  const menu = useNavigate();
  const newpassword = useNavigate();
console.log(userData)
  const handleButtonClickBlog = () => {
    navigate('/ScreenBlog');
  }

  const handleButtonClick = () => {
    navigate('/Cadastro');
  };

  const handleButtonClickHome = () => {
    menu('/MenuPrincipal');
  };

  const handleButtonClickPassword = () => {
    newpassword('/newPassword');
  }

  const handleButtonClickLogin = async (e) => {
    e.preventDefault();

    try {
      await schema.validate({ email, password });

      const response = await axios.get('http://127.0.0.1:8000/cadastro/', {
        params: {
          email: email,
          password: password,
        },
      });

      if (Object.keys(response.data).length !== 0) {
        setUserData(response.data); // Update the user data in the context with the new data
        toastSuccess('Logado com sucesso!');
        handleButtonClickHome();
        localStorage.setItem('userData', JSON.stringify(response.data));
      } else {
        toastInfo('Não foi possível Logar');
      }
    } catch (error) {
      console.error(error);
      toastInfo(error.message);
    }
  };

  const handleUpdateData = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get('http://127.0.0.1:8000/cadastro/');
  
      if (Object.keys(response.data).length !== 0) {
        // Update the user data in the context with the new data
        setUserData(response.data);
        toastSuccess('Data updated successfully!');
      } else {
        toastInfo('No new data available');
      }
    } catch (error) {
      console.error(error);
      toastInfo('Error updating data');
    }
  };
  
  
  

  return {
    handleButtonClick,
    handleButtonClickHome,
    handleButtonClickLogin,
    setPassword,
    setEmail,
    email,
    password,
    handleButtonClickPassword,
    handleButtonClickBlog,
    handleUpdateData
  };
}

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

export default UseNewLogin;
