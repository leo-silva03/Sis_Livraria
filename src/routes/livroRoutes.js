import express from "express";
import LivroController from "../controllers/livroController.js";

//Para listar todos os livros
const routes = express.Router();

routes.get("/livros", LivroController.listarLivros); // Rota para listar todos os livros
routes.get("/livros/busca", LivroController.listarLivrosPorEditora); // Rota para buscar livros por editora
routes.get("/livros/nome", LivroController.listarLivrosPorNome); // Rota para buscar livros por nome
routes.get("/livros/:id", LivroController.listarLivroPorId); // Rota para buscar livro por id
routes.post("/livros", LivroController.cadastrarLivro); // Rota para cadastrar livro
routes.put("/livros/:id", LivroController.atualizarLivro); // Rota para atualizar livro
routes.delete("/livros/:id", LivroController.excluirLivro); // Rota para excluir livro

export default routes;