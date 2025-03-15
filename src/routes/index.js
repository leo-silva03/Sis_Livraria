import express from "express";
import livros from "./livroRoutes.js";
import autores from "./autoresRoutes.js"; // Adicionado aqui

// Para testar se o servidor está rodando
const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Curso de Node.js");
    });
    app.use(express.json(), livros);
    app.use(express.json(), autores); // Adicionado aqui
}

export default routes;