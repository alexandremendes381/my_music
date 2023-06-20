import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScreenCadastro from './views/screenCadastro/index';
import ScreenMenu from './views/screenMenu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cadastro" element={<ScreenCadastro />} />
        <Route path="/Menu" element={<ScreenMenu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
