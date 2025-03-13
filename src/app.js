import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/livro.js";

// Para fazer a conexão com o banco de dados
const conexao = await conectaNaDatabase();

// Mensagem de erro de conexão
conexao.on("error", (erro) => {
    console.log("Erro ao conectar no banco de dados. Erro: ", erro);
});
// Mensagem de conexão realizada com sucesso
conexao.once("open", () => {
    console.log("Conexão realizada com sucesso!");
});

// Middleware para verificar se o servidor está rodando
const app = express();
app.use(express.json());

// Para testar se o servidor está rodando
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

// Para listar todos os livros
app.get("/livros", async (req, res) => {
    try {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar livros", error: error.message });
    }
});

// Para listar um livro específico
app.get("/livros/:id", async (req, res) => {
    try {
        const livroEncontrado = await livro.findById(req.params.id);
        if (livroEncontrado) {
            res.status(200).json(livroEncontrado);
        } else {
            res.status(404).json({ message: "Livro não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar livro", error: error.message });
    }
});

// Para cadastrar livro
app.post("/livros", async (req, res) => {
    try {
        const novoLivro = new livro(req.body);
        await novoLivro.save();
        res.status(201).send("Livro adicionado com sucesso");
    } catch (error) {
        res.status(500).json({ message: "Erro ao adicionar livro", error: error.message });
    }
});

// Para alterar livro
app.put("/livros/:id", async (req, res) => {
    try {
        const livroAtualizado = await livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (livroAtualizado) {
            res.status(200).send("Livro alterado com sucesso");
        } else {
            res.status(404).send("Livro não encontrado");
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao alterar livro", error: error.message });
    }
});

// Para excluir livro
app.delete("/livros/:id", async (req, res) => {
    try {
        const livroDeletado = await livro.findByIdAndDelete(req.params.id);
        if (livroDeletado) {
            res.status(200).send("Livro excluído com sucesso");
        } else {
            res.status(404).send("Livro não encontrado");
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao excluir livro", error: error.message });
    }
});

export default app;
