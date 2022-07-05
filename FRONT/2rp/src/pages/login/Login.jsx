import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { parseJwt } from "../../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/img/Logo";

function Login() {
  const [emailUsuario, setEmailUsuario] = useState("");
  const [senhaUsuario, setSenhaUsuario] = useState("");

  const navigate = useNavigate();

  const notify_preencherCampos = () => toast.error("Preencha todos os campos!");
  const notify_erroLogin = () => toast.error("Email ou Senha inválidos!");

  const fazerLogin = (event) => {
    event.preventDefault();

    if (emailUsuario != "" && senhaUsuario != "") {
      api
        .post("/Login/Login", {
          email: emailUsuario,
          senha: senhaUsuario,
        })
        .then((resposta) => {
          if (resposta.status === 200) {
            localStorage.setItem("usuario-login", resposta.data.token);
            localStorage.setItem("perfil", parseJwt().jti);
            if (parseJwt().role == 1) {
              navigate("/MeuPerfil");
            } else if (parseJwt().role == 2 || parseJwt().role == 3) {
              navigate("/Cadastro");
            }
          }
        })
        .catch((erro) => {
          console.log(erro)
          notify_erroLogin();
        });
    } else {
      notify_preencherCampos();
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <header className="bg-black h-[15vh] flex items-center justify-center">
        <div className="w-[90%]">
          <Logo />
        </div>
      </header>
      <main className="flex bg-bg-login bg-cover bg-no-repeat justify-center items-center h-[85vh]">
        <div className="flex w-[90%] justify-between">
          <div className="flex justify-center items-center w-[35vw] h-[80%]">
            <p className="font-poppins text-4xl text-white uppercase text-center">
              Entre na plataforma e gerencie seus usuários
            </p>
          </div>
          <div className="flex flex-col items-center justify-between h-[80%] bg-white w-[25vw] rounded">
            <h1 className="font-poppins font-bold text-2xl text-center pt-3">
              Login
            </h1>
            <form
              onSubmit={(event) => fazerLogin(event)}
              className="flex flex-col justify-evenly h-[80%] p-4 w-[90%]"
            >
              <div className="flex flex-col h-[15%] justify-around item">
                <label
                  htmlFor="email"
                  className="font-poppins font-bold text-lg"
                >
                  Email
                </label>
                <input
                  value={emailUsuario}
                  onChange={(event) => setEmailUsuario(event.target.value)}
                  name="email"
                  type="email"
                  placeholder="Digite seu Email"
                  className="rounded h-8 outline-none"
                ></input>
              </div>
              <div className="flex flex-col h-[15%] justify-around pt-3">
                <label
                  htmlFor="senha"
                  className="font-poppins font-bold text-lg"
                >
                  Senha
                </label>
                <input
                  value={senhaUsuario}
                  onChange={(event) => setSenhaUsuario(event.target.value)}
                  name="senha"
                  type="password"
                  placeholder="Digite sua Senha"
                  className="rounded h-8 outline-none"
                ></input>
              </div>
              <div className="flex flex-col items-center justify-center w-[100%] pt-6 pb-2">
                <button
                  type="submit"
                  className="bg-black rounded font-poppins text-white w-[100%] h-12"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
