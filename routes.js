const {Router} = require("express");
const Login = require('./controllers/login.js');
const Cadastro = require('./controllers/cadastro1.js')
const routes = Router();

//criando a rota de login
routes.post("/logar", Login.login)

//criando a rota do html de login
routes.get("/login", Login.exibirLogin)

//criando a rota do cadastro 
routes.post("/cadastrar", Cadastro.cadastro)

//criando a rota do html cadastro
routes.get("/cadastro", Cadastro.exibirCadastro)

module.exports = routes;