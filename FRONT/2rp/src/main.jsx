import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { parseJwt, usuarioAutenticado } from "./services/auth";

import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastrarUsuario/Cadastro";
import EditarMeuPerfil from '././pages/editarPerfil/EditarMeuPerfil';
import EditarPerfil from '././pages/editarPerfil/EditarPerfil';
import MeuPerfil from './pages/perfil/MeuPerfil';
import Perfil from "./pages/perfil/Perfil";
import VerPerfis from './pages/verPerfil/VerPerfis';

import "./global.css";

const Logado = ({ children }) => {
  return usuarioAutenticado() ? children : <Navigate to="/Login" />;
};

const PermissaoAdm = ({ children }) => {
  return usuarioAutenticado() && parseJwt().role === '2' ? (
    children
  ) : (
    <Navigate to="/Login" />
  );
};

const PermissaoRoot = ({ children }) => {
  return usuarioAutenticado() && parseJwt().role === '3' ? (
    children
  ) : (
    <Navigate to="/Login" />
  );
};

const PermissaoAdmRoot = ({ children }) => {
  return usuarioAutenticado() && parseJwt().role === '2' || usuarioAutenticado() && parseJwt().role === '3' ? (
    children
  ) : (
    <Navigate to="/Login" />
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MeuPerfil" element={<Logado><MeuPerfil/></Logado>}/>
        <Route path="/EditarMeuPerfil" element={<Logado><EditarMeuPerfil/></Logado>}/>
        <Route path="/Cadastro" element={<PermissaoAdmRoot><Cadastro/></PermissaoAdmRoot>} />
        <Route path="/VerPerfis" element={<PermissaoAdmRoot><VerPerfis/></PermissaoAdmRoot>} />
        <Route path="/EditarPerfil" element={<PermissaoAdmRoot><EditarPerfil/></PermissaoAdmRoot>} />
        <Route path="/Perfil" element={<PermissaoAdmRoot><Perfil/></PermissaoAdmRoot>} />
      </Routes>
    </div>
  </BrowserRouter>
);
