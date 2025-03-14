import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

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

app.use(express.json())
routes(app);



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
