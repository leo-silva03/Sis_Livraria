import express from "express";
import AutorController from "../controllers/autorController.js";

//Para listar todos os autores
const routes = express.Router();

routes.get("/autores", AutorController.listarAutor); // Rota para listar todos os autores
routes.get("/autores/nome", AutorController.listarAutorPorNome); // Rota para buscar autores por nome
routes.get("/autores/:id", AutorController.listarAutorPorId); // Rota para buscar autor por id
routes.post("/autores", AutorController.cadastrarAutor); // Rota para cadastrar autor
routes.put("/autores/:id", AutorController.atualizarAutor); // Rota para atualizar autor
routes.delete("/autores/:id", AutorController.excluirAutor); // Rota para excluir autor

export default routes;