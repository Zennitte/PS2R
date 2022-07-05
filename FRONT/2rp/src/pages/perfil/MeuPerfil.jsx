import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { parseJwt } from "../../services/auth";

import Header from "../../components/header/Header";
import Perfil from "../../assets/img/Perfil";

function MeuPerfil() {
  const [usuario, setUsuario] = useState([]);

  function buscarUsuario() {
    api.post("/Usuarios/BuscarUsuario/" + parseJwt().jti)
      .then(resposta => {
        if (resposta.status === 200) {
          console.log("Chegou aqui")
          setUsuario(resposta.data);
        }
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  useEffect(buscarUsuario, []);

  return (
    <>
      <Header />
      <main className="flex bg-perfil bg-cover bg-no-repeat justify-center items-center h-[85vh]">
        <div className="flex w-[90%] justify-center bg-black h-[80%] rounded-xl">
          <div className="flex w-[75%] justify-between items-center">
            <div className="flex flex-col w-[40%] justify-evenly items-center h-[80%] ">
              <Perfil />
              <Link
                className="bg-white rounded-lg font-poppins font-bold h-12 text-black text-2xl w-[80%] flex items-center justify-center capitalize"
                to="/EditarMeuPerfil"
              >
                Editar Perfil
              </Link>
            </div>
            <div className="flex flex-col w-[50%] justify-evenly items-center bg-white h-[80%] rounded-xl">
              <div className="flex flex-col w-[85%] h-[15%] py-3">
                <strong className="font-poppins text-2xl font-bold ">Nome</strong>
                <span className="font-poppins text-lg pt-2">{usuario.nome}</span>
              </div>
              <div className="flex flex-col w-[85%] h-[15%]  py-3">
                <strong className="font-poppins text-2xl font-bold ">Email</strong>
                <span className="font-poppins text-lg pt-2">{usuario.email}</span>
              </div>
              <div className="flex flex-col w-[85%] h-[15%]  py-3">
                <strong className="font-poppins text-2xl font-bold ">Status</strong>
                {usuario.situacao && (
                  <span className="font-poppins text-lg pt-2">Ativo</span>
                )}
                {!usuario.situacao && (
                  <span className="font-poppins text-lg pt-2">Inativo</span>
                )}
              </div>
              <div className="flex flex-col w-[85%] h-[15%]  py-3">
                <strong className="font-poppins text-2xl font-bold ">Tipo de Usuario</strong>
                {usuario.idTipoUsuario == 1 && (
                  <span className="font-poppins text-lg pt-2">Geral</span>
                )}
                {usuario.idTipoUsuario == 2 && (
                  <span className="font-poppins text-lg pt-2">Admin</span>
                )}
                {usuario.idTipoUsuario == 3 && (
                  <span className="font-poppins text-lg pt-2">Root</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MeuPerfil;
