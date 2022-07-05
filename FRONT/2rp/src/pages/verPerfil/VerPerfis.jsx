import { useState, useEffect } from "react";
import { api } from "../../services/api";

import Header from "../../components/header/Header";
import DialogBox from "../../components/dialog/Dialog";

import { useNavigate } from "react-router-dom";
import { parseJwt } from "../../services/auth";

function VerPerfis() {
  const [listaUsers, setListaUsers] = useState([]);

  const navigate = useNavigate();

  function redirectEditar(id) {
    localStorage.setItem("perfil-editar", id);
    navigate("/EditarPerfil");
  }

  function listarUsuarios() {
    api
      .get("/Usuarios/ListarTodas", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("usuario-login"),
        },
      })
      .then((resposta) => {
        if (resposta.status === 200) {
          console.log(resposta.data);
          setListaUsers(resposta.data);
        }
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function excluirUsuario(id) {
    api
      .delete("/Usuarios/ExcluirUsuario/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("usuario-login"),
        },
      })
      .then((resposta) => {
        if (resposta.status === 204) {
          listarUsuarios();
        }
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  useEffect(listarUsuarios, []);

  return (
    <>
      <Header />
      <main className="flex bg-cadastro bg-cover bg-no-repeat justify-center items-center h-[85vh]">
        <div className="flex flex-wrap w-[90%] justify-between">
          {listaUsers.map((user) => {
            return (
              <div className="w-[45%] h-[100%] py-5 flex">
                <div className="flex flex-col justify-evenly w-[100%] bg-white h-[100%]  rounded-xl">
                  <div className="pl-2">
                    <strong className="font-poppins font-bold ">Nome: </strong>
                    <span className="capitalize font-poppins">{user.nome}</span>
                  </div>
                  <div className="pl-2">
                    <strong className="font-poppins font-bold ">Email: </strong>
                    <span className="capitalize font-poppins">
                      {user.email}
                    </span>
                  </div>
                  <div className="pl-2">
                    <strong className="font-poppins font-bold ">
                      Status:{" "}
                    </strong>
                    {user.situacao && (
                      <span className="capitalize font-poppins">Ativo</span>
                    )}
                    {!user.situacao && (
                      <span className="capitalize font-poppins">Inativo</span>
                    )}
                  </div>
                  <div className="pl-2">
                    <strong className="font-poppins font-bold ">
                      Tipo de Usuario:{" "}
                    </strong>
                    <span className="capitalize font-poppins">
                      {user.idTipoUsuarioNavigation.tipo}
                    </span>
                  </div>
                  <div className="pl-2 mt-2 pb-2 flex items-center">
                    <button
                      onClick={() => redirectEditar(user.idUsuario)}
                      className="bg-black rounded text-white w-[20%] capitalize font-poppins mr-3"
                    >
                      Editar perfil
                    </button>
                    {parseJwt().role === "3" && (
                      <button
                        onClick={() => excluirUsuario(user.idUsuario)}
                        className="bg-red-600 rounded text-white w-[20%] capitalize font-poppins"
                      >
                        Deletar usuário
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default VerPerfis;
