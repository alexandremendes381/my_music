import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toastInfo, toastSuccess } from '../../utils/ToastInfo';
import axios from 'axios';
import * as yup from 'yup';

function UseNewCadastro() {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [bairro, setBairro] = useState('');
  const [uf, setUf] = useState('');
  const [country, setCountry] = useState('');
  const [terms, setTerms] = useState(false)
  const [selfie, setSelfie] = useState(null); // Estado para armazenar o arquivo da selfie
  const navigate = useNavigate();

  const handleButtonClickTerms = () => {
    const url = "http://localhost:3000/Terms";
    const newTab = window.open(url, "_blank");
    newTab.focus();
  };

  const handleButtonClickHome = () => {
    navigate('/');
  };

  const handleButtonClickCep = async (e) => {
    e.preventDefault();

    try {
      const cep = document.getElementById('cep').value;

      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (response.ok && !data.erro) {
        setCity(data.localidade);
        setBairro(data.bairro);
        setUf(data.uf);
        setCountry('Brasil');
        toastSuccess('CEP Encontrado com Sucesso');
      } else {
        // CEP não encontrado ou inválido
        toastInfo('CEP não encontrado.');
      }
    } catch (error) {
      toastInfo('Erro ao buscar o CEP:', error);
    }
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const handleButtonClickCadastro = async () => {
    try {
      await schema.validate({
        email,
        password,
        name,
        telephone,
        cep,
        city,
        bairro,
        uf,
        birthdate,
        country,
        selfie,
        terms
      });

      const telephoneWithoutMask = telephone.replace(/\D/g, '');
      const dateWithoutMask = birthdate.replace(/\D/g, '');

      const formData = new FormData();
      formData.append('name', name);
      formData.append('telephone', telephoneWithoutMask);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('cep', cep);
      formData.append('birthdate', dateWithoutMask);
      formData.append('city', city);
      formData.append('bairro', bairro);
      formData.append('uf', uf);
      formData.append('country', country);
      formData.append('terms', terms);

      if (selfie.startsWith('data:image')) {
        // If the selfie is a data URI (Base64-encoded image), convert it to a Blob
        const blobSelfie = dataURItoBlob(selfie);
        formData.append('selfie', blobSelfie, 'selfie.jpg');
      } else {
        // If the selfie is already a URL, send it directly
        formData.append('selfie', selfie);
      }

      axios
        .post('http://127.0.0.1:8000/cadastro/', formData)
        .then(() => {
          toastSuccess('Seu cadastro foi criado com sucesso!');
          setName('');
          setTelephone('');
          setEmail('');
          setPassword('');
          setSelfie(null);
          handleButtonClickHome();
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
    handleButtonClickCadastro();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelfie(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      toastInfo('Por favor, selecione uma imagem válida.');
    }
  };

  return {
    name,
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
    setUf,
    bairro,
    setBairro,
    country,
    setCountry,
    telephone,
    setTelephone,
    email,
    setEmail,
    password,
    setSelfie,
    selfie,
    handleFileChange,
    handleButtonClickTerms,
    setTerms,
    terms
  };
}

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
  name: yup.string().required('Nome é obrigatório'),
  telephone: yup.string().nullable().required('Telefone é obrigatório'),
  cep: yup.string().nullable().required('Cep é obrigatório'),
  birthdate: yup.string().nullable().required('Data de Nascimento é obrigatório'),
  city: yup.string().nullable().required('Cidade é obrigatório'),
  bairro: yup.string().nullable().required('Bairro é obrigatório'),
  uf: yup.string().nullable().required('Uf é obrigatório'),
  country: yup.string().nullable().required('Pais é obrigatório'),
  terms: yup.bool().oneOf([true]).required('O Termo é obrigatório'),
});

export default UseNewCadastro;
