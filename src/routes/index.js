import express from "express";
import livros from "./livroRoutes.js";

// Para testar se o servidor está rodando
// app.get("/", (req, res) => {
const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Curso de Node.js");
    });
    app.use(express.json(),livros)
}
export default routes;