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

app.use(express.json());
routes(app);

export default app;
