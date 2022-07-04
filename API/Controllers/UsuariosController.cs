using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PS2R.Domains;
using PS2R.Interfaces;
using PS2R.ViewModels;
using System.Collections.Generic;

namespace PS2R.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;
        public UsuariosController(IUsuarioRepository repo)
        {
            _usuarioRepository = repo;
        }

        [HttpGet("ListarTodas")]
        public IActionResult ListarTodos()
        {
            try
            {
                List<Usuario> listaUsuarios = _usuarioRepository.ListarTodos();
                return Ok(listaUsuarios);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
                throw;
            }
        }

        [Authorize(Roles = "2,3")]
        [HttpPost("Cadastrar")]
        public IActionResult Cadastrar(UsuarioCadastroViewModel novoUsuario)
        {
            try
            {
                if (novoUsuario != null)
                {
                    _usuarioRepository.CadastrarUsuario(novoUsuario);
                    return StatusCode(201);
                }
                else
                {
                    return BadRequest(new
                    {
                        mensagem = "Email ou senha inválidos!"
                    });
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
                throw;
            }
        }

        [HttpPost("BuscarUsuario/{id}")]
        public IActionResult BuscarUsuario(int id)
        {
            try
            {
                if (id > 0)
                {
                    Usuario usuarioBuscado = _usuarioRepository.BuscarUsuario(id);

                    if (usuarioBuscado == null)
                    {
                        return BadRequest(new
                        {
                            mensagem = "Id inválido"
                        });
                    }
                    else
                    {
                        return Ok(usuarioBuscado);
                    }
                }
                else
                {
                    return BadRequest(new
                    {
                        mensagem = "Id inválido"
                    });
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
                throw;
            }
        }

        [Authorize(Roles = "2, 3")]
        [HttpPut("AtualizarUsuario/{id}")]
        public IActionResult AtualizarUsuario(int id, UsuarioCadastroViewModel usuarioAtualizado)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.BuscarUsuario(id);

                if (usuarioBuscado == null)
                {
                    return BadRequest(new
                    {
                        mensagem = "Usuário não encontrado"
                    });
                }
                else
                {
                    _usuarioRepository.AlterarUsuario(id, usuarioAtualizado);
                    return StatusCode(200);
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
                throw;
            }
        }

        [HttpPatch("AtualizarMeuUsuario/{id}")]
        public IActionResult AtualizarMeuUsuario(int id, UsuarioAtualizadoViewModel usuarioAtualizado)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.BuscarUsuario(id);

                if (usuarioBuscado == null)
                {
                    return BadRequest(new
                    {
                        mensagem = "Usuário não encontrado"
                    });
                }
                else
                {
                    _usuarioRepository.AlterarMeuUsuario(id, usuarioAtualizado);
                    return StatusCode(200);
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
                throw;
            }
        }

        [Authorize(Roles = "2, 3")]
        [HttpPut("AlterarStatus/{id}")]
        public IActionResult AlterarStatus(int id)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.BuscarUsuario(id);

                if (usuarioBuscado == null)
                {
                    return BadRequest(new
                    {
                        mensagem = "Usuário não encontrado"
                    });
                }
                else
                {
                    _usuarioRepository.AlterarSituacao(id);
                    return StatusCode(200);
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
                throw;
            }
        }

        [Authorize(Roles = "3")]
        [HttpDelete("ExcluirUsuario/{id}")]
        public IActionResult ExcluirUsuario(int id)
        {
            try
            {
                if (id > 0)
                {
                    Usuario usuarioBuscado = _usuarioRepository.BuscarUsuario(id);

                    if (usuarioBuscado == null)
                    {
                        return BadRequest(new
                        {
                            mensagem = "Usuário não encontrado"
                        });
                    }
                    else
                    {
                        _usuarioRepository.Excluir(id);
                        return StatusCode(204);
                    }
                }
                else
                {
                    return BadRequest(new
                    {
                        mensagem = "Id inválido"
                    });
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
                throw;
            }
        }

    }
}
