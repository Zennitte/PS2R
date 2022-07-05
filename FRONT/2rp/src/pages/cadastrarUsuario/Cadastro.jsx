import { useState } from "react";
import { api } from "../../services/api";

import Header from "../../components/header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [idTipoUsuario, setIdTipoUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [situacao, setSituacao] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const notify_preencherCampos = () => toast.error("Preencha todos os campos!");
  const notify_cadastrar = () => toast.success("Usuário Cadastrado!");
  const notify_erroCadastrar = () =>
    toast.error("Email inválido ou já existe!");

  function cadastrarUsuario(evento) {
    setIsLoading(true);
    evento.preventDefault();

    if (nome != "" && email != "" && senha != "") {
      api
        .post(
          "/Usuarios/Cadastrar",
          {
            idTipoUsuario: idTipoUsuario,
            nome: nome,
            email: email,
            senha: senha,
            situacao: situacao,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("usuario-login"),
            },
          }
        )
        .then((resposta) => {
          if (resposta.status === 201) {
            console.log("Usuario cadastrado");
            setNome("");
            setIdTipoUsuario("");
            setEmail("");
            setSenha("");
            setIsLoading("");
            notify_cadastrar();
          }
        })
        .catch((erro) => {
          console.log(erro);
          notify_erroCadastrar();
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      notify_preencherCampos();
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <main className="flex bg-cadastro bg-cover bg-no-repeat justify-center items-center h-[85vh]">
        <div className="flex w-[90%] justify-between">
          <div className="flex justify-center items-center w-[35vw] h-[80%]">
            <p className="font-poppins text-4xl text-white uppercase text-center">
              Cadastre seus usuários
            </p>
          </div>
          <div className="flex flex-col items-center justify-between h-[80%] bg-white w-[25vw] rounded">
            <form
              onSubmit={(event) => cadastrarUsuario(event)}
              className="flex flex-col justify-evenly h-[80%] p-4 w-[90%]"
            >
              <div className="flex flex-col h-[15%] justify-around py-2">
                <label
                  htmlFor="nome"
                  className="font-poppins font-bold text-lg"
                >
                  Nome
                </label>
                <input
                  value={nome}
                  onChange={(campo) => setNome(campo.target.value)}
                  name="nome"
                  type="text"
                  placeholder="Digite seu Nome"
                  className="rounded h-8 outline-none"
                ></input>
              </div>
              <div className="flex flex-col h-[15%] justify-around item py-2">
                <label
                  htmlFor="tipo-user"
                  className="font-poppins font-bold text-lg"
                >
                  Tipo de Usuário
                </label>
                <select
                  value={idTipoUsuario}
                  onChange={(campo) => setIdTipoUsuario(campo.target.value)}
                  name="tipo-user"
                  id="tipo-user"
                  className="pt-1 font-poppins"
                  required
                >
                  <option className="font-poppins" value={0}>
                    Escolha o tipo do usuário
                  </option>
                  <option className="font-poppins" value={1}>
                    Geral
                  </option>
                  <option className="font-poppins" value={2}>
                    Admin
                  </option>
                  <option className="font-poppins" value={3}>
                    Root
                  </option>
                </select>
              </div>
              <div className="flex flex-col h-[15%] justify-around py-2">
                <label
                  htmlFor="email"
                  className="font-poppins font-bold text-lg"
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  placeholder="Digite seu Email"
                  className="rounded h-8 outline-none"
                ></input>
              </div>
              <div className="flex flex-col h-[15%] justify-around py-2">
                <label
                  htmlFor="senha"
                  className="font-poppins font-bold text-lg"
                >
                  Senha
                </label>
                <input
                  value={senha}
                  onChange={(campo) => setSenha(campo.target.value)}
                  name="senha"
                  type="password"
                  placeholder="Digite sua Senha"
                  className="rounded h-8 outline-none"
                ></input>
              </div>
              <div className="flex flex-col items-center justify-center w-[100%] pt-6 pb-2">
                {isLoading && (
                  <button
                    disabled
                    type="submit"
                    className="bg-black rounded font-poppins text-white w-[100%] h-12"
                  >
                    Carregando...
                  </button>
                )}
                {!isLoading && (
                  <button
                  type="submit"
                  className="bg-black rounded font-poppins text-white w-[100%] h-12"
                >
                  Cadastrar
                </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cadastro;
