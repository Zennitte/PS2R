# PS2R
<p>Projeto para o gerenciamento de usuários possibilitando login, cadastro, listagem e exclusão dos mesmos</p>
<h2>Escopo</h2>
<ul>
  <li>Cadastrar um novo usuário</li>
  <li>Listar informações de um usuário</li>
  <li>Alterar o nome e o tipo de um usuário</li>
  <li>Excluir um usuário</li>
  <li>Alterar o Status de um usuário (ativo ou inativo)</li>
</ul>
<h2>Tecnologias</h2>
<div>
  <h3>Banco De Dados</h3>
  <img align = "center" alt = "SQL Server" height = "40" width = "40" src ="https://img.icons8.com/color/48/000000/microsoft-sql-server.png">
  <h3>Layout</h3>
  <img align = "center" alt = "Figma" height = "40" width = "40" src = "https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg">
  <h3>Versionamento</h3>
  <img align = "center" alt = "Git" height = "40" width = "40" src = "https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg">
  <h3>Back-End</h3>
  <img align = "center" alt = "C#" height = "40" width = "40" src = "https://github.com/devicons/devicon/blob/master/icons/csharp/csharp-original.svg">
  <h3>Front-End</h3>
  <img align = "center" alt = "Html" height = "40" width = "40" src = "https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg">
  <img align = "center" alt = "CSS" height = "40" width = "40" src = "https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg">
  <img align = "center" alt = "JavaScript" height = "40" width = "40" src = "https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg">
  <img align = "center" alt = "ReactJs" height = "40" width = "40" src = "https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg">
  <img align = "center" alt = "NodeJs" height = "40" width = "40" src = "https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg">
</div>
<h2>Banco de Dados Relacional</h2>
<p>Banco de dados relacional é aquele que ordena os dados para que eles sejam vistos como tabelas ou relações. Ele é importante pois nos permite ordenar nossos dados de forma mais intendivel</p>
<strong>Requisitos • SqlServer</strong>
<p>Observação: Executar scripts de criação do banco.</p>
<h2>Back-End</h2>
<p>Para este projeto optamos por desenvolver a nossa aplicação no formato de uma API, ela foi desenvolvida utilizando o Microsoft Visual Studio.</p>
<p><strong>Api</strong> é um conjunto de padrões e instruções estabelecidos para utilização do software, definindo as requisições e as respostas seguindo o protocolo HTTP, neste caso expresso no formato JSON, para que seja possível acessar o sistema em diversos dispositivos distintos sem a preocupação com a linguagem que será utilizada por estes.</p>
<p>Além disso, foi utilizado o estilo de arquitetura REST.</p>
<p><strong>API -</strong> Application Programming Interface – Interface de Programação de Aplicativos.</p>
<p><strong>HTTP -</strong> Hypertext Transfer Protocol – Protocolo de Transferência de Hipertexto.</p>
<p><strong>JSON -</strong> JavaScript Object Notation – Notação de Objetos JavaScript.</p>
<p><strong>REST -</strong> Representational State Transfer – Interface de Programação de Aplicativos.</p>
<p><strong>Entity Framework</strong> é um conjunto de tecnologias no ADO.NET que dão suporte ao desenvolvimento de aplicativos de software orientado a dados. O Entity Framework permite que os desenvolvedores trabalhem com dados na forma de objetos e propriedades específicos de domínio, como clientes e endereços de clientes, sem ter que se preocupar com as tabelas e colunas de banco de dados subjacentes em que esses data são armazenados.</p>
<p><strong>Swagger</strong> é uma ferramenta usada para documentar os endpoints da nossa API.</p>
<p><strong>DataBase First </strong>é o método de construção da API onde se usa as tabelas preexististentes no banco de dados, e os transforma em classes dentro da API</p>
<p><strong>JWT </strong>é o método de autenticação usado, onde a autenticação é por meio de tokens.</p>
<strong>Requisitos • .NET 5.0</strong>
<h3>Como Rodar</h3>
<ul>
  <li>Clone o repositório do github</li>
  <li>Abra a pasta back-end</li>
  <li>Abra a solução</li>
  <li>Execute o projeto</li>
</ul>
<p>Observação: Caso não seja possível a utilização da API com o banco na nuvem, realizar o Scaffold para sobrescrever a Context.</p>
<p>Link da API: http://2rpps.azurewebsites.net/index.html<a>
<h2>Web</h2>
<p>A parte web do projeto resolvemos desenvolver em JavaScript mais especificamente usando a biblioteca ReactJs.</p>
<p>Foram desenvolvidas 6 páginas:</p>
<ul>
  <li>Login: Página que gera um token e redireciona para as outras páginas baseado no token gerado.</li>
  <li>Cadastro: Página onde os usuários admin/root podem cadastrar novos usuários.</li>
  <li>MeuPerfil: Página onde são exibidos os dados dos usuário logado</li>
  <li>EditarMeuPerfil: Página onde ocorre a edição dos dados do usuário logado.</li>
  <li>EditarPerfil: Página onde ocorre a edição dos dados de um usuário qualquer.</li>
  <li>VerPerfis: Página para a listagem de todos os usuários.</li>
</ul>
<strong>Requisitos • NodeJs >= 16.0</strong>
<h3>Como Rodar</h3>
<ul>
  <li>Clone o repositório do github</li>
  <li>Abra a pasta front-end</li>
  <li>Abra o terminal</li>
  <li>Execute o comando de instalação npm i ou yarn install</li>
  <li>Após a instalação execute o projeto pelo comando npm run dev ou yarn dev</li>
</ul>
<p>Observação: Caso a API na nuvem não funcione, ir no arquivo api.js e trocar a baseUrl para uma url local.</p>
