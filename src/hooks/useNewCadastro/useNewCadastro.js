import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toastInfo, toastSuccess } from '../../utils/ToastInfo';
import axios from 'axios';
import * as yup from "yup";

function UseNewCadastro() {
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [cep, setCep] = useState('');
    const [city, setCity] = useState('');
    const [bairro, setBairro] = useState('');
    const [uf, setuf] = useState('');
    const [country, setCountry] = useState('');
    const Login = useNavigate();
    const handleButtonClickHome = () => {
        Login('/');
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
                setuf(data.uf);
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




    const handleButtonClickCadastro = async () => {
        try {
            await schema.validate({
                email, password, name, telephone, cep,
                city, bairro, uf, birthdate, country
            });
            const telephoneWithoutMask = telephone.replace(/\D/g, '');
            const dateWithoutMask = birthdate.replace(/\D/g, '');
            axios
                .post('http://127.0.0.1:8000/cadastro/', {
                    name,
                    telephone: telephoneWithoutMask,
                    email,
                    password,
                    cep,
                    birthdate: dateWithoutMask,
                    city,
                    bairro,
                    uf,
                    country
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
    }
}
const schema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
    name: yup.string().required('E-mail é obrigatório'),
    telephone: yup.string().nullable().required('Telefone é obrigatório'),
    cep: yup.string().nullable().required('Cep é obrigatório'),
    birthdate: yup.string().nullable().required('Cep é obrigatório'),
    city: yup.string().nullable().required('Data é obrigatório'),
    bairro: yup.string().nullable().required('Bairro é obrigatório'),
    uf: yup.string().nullable().required('Uf é obrigatório'),
    country: yup.string().nullable().required('Pais é obrigatório'),
});

export default UseNewCadastro
