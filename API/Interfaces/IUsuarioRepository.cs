using PS2R.Domains;
using PS2R.ViewModels;
using System.Collections.Generic;

namespace PS2R.Interfaces
{
    public interface IUsuarioRepository
    {
        Usuario Login(string email, string senha);
        Usuario BuscarUsuario(int id);
        List<Usuario> ListarTodos();
        void AlterarUsuario(int id, UsuarioCadastroViewModel usuarioAtualizado);
        void AlterarMeuUsuario(int id, UsuarioAtualizadoViewModel usuarioAtualizado);
        void Excluir(int id);
        void CadastrarUsuario(UsuarioCadastroViewModel novoUsuario);
        void AlterarSituacao(int id);
    }
}
