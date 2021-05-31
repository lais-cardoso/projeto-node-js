//principal framework = express(orientado a rotas)
const express = require("express");
const app = express();
const routes = require('./routes.js')

//traduz(decodificador) para "app" - configurando o bodyParser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//utiliza todas as rotas de routes
app.use("/", routes)

//porque acontece o erro de CANNOTGET? Quando não existe a rota definida
//criando uma rota
//req é a requisição recebida, res a resposta(objeto)
/*app.get("/", function(req, res){
    //send(enviar)
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req,res){
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const nota1 = req.body.nota1;
    const nota2 = req.body.nota2;
    console.log(nome + " " + sobrenome + " "+ nota1 + " " + nota2 + " ");
})
*/

/*app.post("/logar", function(req,res){
    Login.create({
         usuario: req.body.usuario,
         senha:  req.body.senha
    }).then(function(){
        res.send("Este Login existe!")
    }).catch(function(){
        res.send("Este Login não existe!")
    })
    
    console.log(usuario+ " "+senha);
})*/

//função de callback é executada sempre que algum evento acontece
//última linha do código deve ser a porta se não não vai rodar
app.listen(5000, () => {
    console.log("Servidor rodando na url http://localhost:5000");
});

//instalando framework express: npm install express --save (aparece a pasta node modules)
//módulo nodemon(serve para não ter que desligar e ligar o servidor a cada nova alteração) = npm instal nodemon -g