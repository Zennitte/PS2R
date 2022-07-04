using PS2R.Contexts;
using PS2R.Domains;
using PS2R.Interfaces;
using PS2R.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace PS2R.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        InLockContext ctx = new InLockContext();
        public void AlterarMeuUsuario(int id, UsuarioAtualizadoViewModel usuarioAtualizado)
        {
            Usuario usuarioBuscado = BuscarUsuario(id);

            if (usuarioBuscado != null)
            {
                if (usuarioAtualizado.Nome == null)
                {
                    usuarioBuscado.Nome = usuarioBuscado.Nome;
                }
                else
                {
                    usuarioBuscado.Nome = usuarioAtualizado.Nome;
                }
                if (usuarioAtualizado.Email == null)
                {
                    usuarioBuscado.Email = usuarioBuscado.Email;
                }
                else
                {
                    usuarioBuscado.Email = usuarioAtualizado.Email;
                }
                if (usuarioAtualizado.Senha == null)
                {
                    usuarioBuscado.Senha = usuarioBuscado.Senha;
                }
                else
                {
                    usuarioBuscado.Senha = usuarioAtualizado.Senha;
                }
                ctx.SaveChanges();
            }
        }

        public void AlterarSituacao(int id)
        {
            Usuario usuarioBuscado = BuscarUsuario(id);

            if (usuarioBuscado != null)
            {
                if (usuarioBuscado.Situacao == true)
                {
                    usuarioBuscado.Situacao = false;
                    ctx.SaveChanges();
                }
                else
                {
                    usuarioBuscado.Situacao = true;
                    ctx.SaveChanges();
                }
            }
        }

        public void AlterarUsuario(int id, UsuarioCadastroViewModel usuarioAtualizado)
        {
            Usuario usuarioBuscado = BuscarUsuario(id);

            if (usuarioBuscado != null)
            {
                if (usuarioAtualizado.Nome == null)
                {
                    usuarioBuscado.Nome = usuarioBuscado.Nome;
                }
                else
                {
                    usuarioBuscado.Nome = usuarioAtualizado.Nome;
                }
                if (usuarioAtualizado.IdTipoUsuario == null)
                {
                    usuarioBuscado.IdTipoUsuario = usuarioBuscado.IdTipoUsuario;
                }
                else
                {
                    usuarioBuscado.IdTipoUsuario = (byte?)usuarioAtualizado.IdTipoUsuario;
                }
                if (usuarioAtualizado.Email == null)
                {
                    usuarioBuscado.Email = usuarioBuscado.Email;
                }
                else
                {
                    usuarioBuscado.Email = usuarioAtualizado.Email;
                }
                if (usuarioAtualizado.Senha == null)
                {
                    usuarioBuscado.Senha = usuarioBuscado.Senha;
                }
                else
                {
                    usuarioBuscado.Senha = usuarioAtualizado.Senha;
                }
                ctx.SaveChanges();
            }
        }

        public Usuario BuscarUsuario(int id)
        {
            Usuario usuario = new Usuario();
            return usuario = ctx.Usuarios.FirstOrDefault(u => u.IdUsuario == id);
        }

        public void CadastrarUsuario(UsuarioCadastroViewModel novoUsuario)
        {
            if (novoUsuario.Email != null && novoUsuario.Senha != null)
            {
                Usuario usuarioCadastrado = new Usuario();

                usuarioCadastrado.IdTipoUsuario = (byte?)novoUsuario.IdTipoUsuario;
                usuarioCadastrado.Nome = novoUsuario.Nome;
                usuarioCadastrado.Email = novoUsuario.Email;
                usuarioCadastrado.Senha = novoUsuario.Senha;
                usuarioCadastrado.Situacao = novoUsuario.Situacao;

                ctx.Usuarios.Add(usuarioCadastrado);
                ctx.SaveChanges();
            }
        }

        public void Excluir(int id)
        {
            Usuario usarioBuscado = BuscarUsuario(id);
            ctx.Usuarios.Remove(usarioBuscado);
            ctx.SaveChanges();
        }

        public List<Usuario> ListarTodos()
        {
            return ctx.Usuarios.Select(u => new Usuario()
            {
                Nome = u.Nome,
                Email = u.Email,
                IdUsuario = u.IdUsuario,
                Situacao = u.Situacao,
                IdTipoUsuarioNavigation = new Tipousuario()
                {
                    Tipo = u.IdTipoUsuarioNavigation.Tipo,
                    IdTipoUsuario = u.IdTipoUsuarioNavigation.IdTipoUsuario
                }
            }).ToList();
        }

        public Usuario Login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
