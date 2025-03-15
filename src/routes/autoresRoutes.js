import express from "express";
import AutorController from "../controllers/autorController.js";

//Para listar todos os autores
const routes = express.Router();

routes.get("/autores", AutorController.listarAutor);
routes.get("/autores/:id", AutorController.listarAutorPorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.excluirAutor);

export default routes;