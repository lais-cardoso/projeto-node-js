module.exports = {
    cadastro(req, res){
        //armazenamento de informações
        const cadastros = []

        //dados de entrada
        let {nome, sobrenome, nota1, nota2} = req.body
        nota1 = parseFloat(nota1);
        nota2 = parseFloat(nota2);
        if(nota1 > 0 && nota2 > 0){
            //armazenar informações
            let nomeCompleto = `${nome} ${sobrenome}`

            let media = (nota1+nota2)/2

            let aluno = {"nomeCompleto": nomeCompleto , "Media": media}

            cadastros.push(aluno)

            res.json({"resposta" : "Sucesso!", "aluno" : aluno})
        }else{
            console.log("Nota inválida!")
            res.sendFile(__dirname + "/index.html")

        }
    },
    exibirCadastro(req, res){
        res.sendFile(__dirname + "/index.html")
    }
}



/*const alunos = [
    {nome: "Lais", sobrenome: "Cardoso", nota1: 10, nota2: 8},
    {nome: "Orion", sobrenome: "Caldeiron", nota1: 8, nota2: 8},
    {nome: "Ander", sobrenome: "Castella", nota1: 9, nota2: 9}
]

const nomeCompleto = alunos.forEach(valorAtual=>{
    console.log(`Nome do aluno: ${valorAtual.nome} ${valorAtual.sobrenome}`)
})

function media(alunos){
    for(i=0; i>alunos.lenght; i++){
        const total = (nota1+nota2)/2
        return total
    }
}*/


