/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'bg-login': 'url("./src/assets/img/bg-login.png")',
        'cadastro': 'url("./src/assets/img/bg-cadastro.png")',
        'perfil': 'url("./src/assets/img/bg-perfil.png")',
      }
    },
  },
  plugins: [],
};
