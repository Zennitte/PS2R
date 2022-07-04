using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PS2R.Domains;
using PS2R.Interfaces;
using PS2R.ViewModels;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace PS2R.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;
        public LoginController(IUsuarioRepository repo)
        {
            _usuarioRepository = repo;
        }

        [HttpPost("Login")]
        public IActionResult Login(LoginViewModel login)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.Login(login.Email, login.Senha);

                if (usuarioBuscado == null)
                {
                    return BadRequest(new
                    {
                        mensagem = "Email ou senha inválidos!"
                    });
                }

                var minhasClaims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email.ToString()),
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),
                    new Claim(ClaimTypes.Role, usuarioBuscado.IdTipoUsuario.ToString()),
                    new Claim("role", usuarioBuscado.IdTipoUsuario.ToString())
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("psrp-autenticacao-token"));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var meuToken = new JwtSecurityToken
                    (
                        issuer: "PS2R_WebApi",
                        audience: "PS2R_WebApi",
                        claims: minhasClaims,
                        expires: System.DateTime.Now.AddMinutes(90),
                        signingCredentials: creds
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(meuToken),
                });
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
                throw;
            }
        }
    }
}
