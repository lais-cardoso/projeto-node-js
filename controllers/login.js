module.exports = {
    login(req,res){
        const cadastro = [{usuario: "lais", senha: "123"}] 

        let {usuario, senha} = req.body
    
        if(cadastro[0].usuario == usuario && cadastro[0].senha == senha){
            console.log("Usuario encontrado!")
            res.json({"resposta": "logado!" })
        }else{
            console.log("Usuario não encontrado!")
            res.json({"resposta": "Usuário não encontrado!"})
        }
    },
    exibirLogin(req, res){
        res.sendFile(__dirname + "/login.html")
    }
}

