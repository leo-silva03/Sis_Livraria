import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/livro.js";

//Para fazer a conexão com banco de dados
const conexao = await conectaNaDatabase();

//Mensagem de erro de conexão
conexao.on("error", (erro) => {
    console.log("Erro ao conectar no banco de dados. Erro: ", erro);
});
//Mensagem de conexão realizada com sucesso
conexao.once("open", () => {
    console.log("Conexão realizada com sucesso!");
});

//Middleware para verificar se o servidor está rodando
const app = express();
app.use(express.json())



//Para testar se o servidor está rodando
app.get("/" , (req,res) => {
    res.status(200).send("Curso de Node.js");
})

//Para listar todos os livros
app.get("/livros", async (req,res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(livros);
})

//Para listar um livro específico
app.get("/livros/:id", (req,res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

//Para cadastrar livro
app.post("/livros", (req,res) => {
    livros.push(req.body);
    res.status(201).send("Livro adicionado com sucesso");
})

//Para alterar livro
app.put("/livros/:id", (req,res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).send("Livro alterado com sucesso");
})


// Para excluir livro
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);

    if (index !== -1) { // Verifica se o livro foi encontrado
        livros.splice(index, 1);
        res.status(200).send("Livro excluído com sucesso");
    } else {
        res.status(404).send("Livro não encontrado");
    }
});


export default app;