import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScreenCadastro from './views/screenCadastro/index';
import ScreenMenu from './views/screenMenu';
import ScreenBiblioteca from './views/screenBiblioteca';
import ScreenVideo from './views/screenVideo';
import ScreenNewPassword from './views/screenNewPassword';
import ScreenBlog from './views/screenBlog';
import ScreenMenuProducts from './views/screenMenuProducts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cadastro" element={<ScreenCadastro />} />
        <Route path="/Menu" element={<ScreenMenu />} />
        <Route path="/Bibliotecas" element={<ScreenBiblioteca/>} />
        <Route path="/video" element={<ScreenVideo/>} />
        <Route path="/newPassword" element={<ScreenNewPassword/>} />
        <Route path="/MenuPrincipal" element={<ScreenMenuProducts/>} />
        
        <Route path="/ScreenBlog" element={<ScreenBlog/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
