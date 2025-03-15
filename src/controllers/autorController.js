import autor from "../models/autor.js";

// Controler para organizar o CRUD de autores
// CRUD - Create, Read, Update, Delete
class AutorController {

    // Para listar todos os autores
    // GET /autor
    static async listarAutor(req, res) {
        try {
            const listaAutor = await autor.find({});
            res.status(200).json(listaAutor);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar autores", error: error.message });
        }
    };

    // Para listar um autor específico
    // GET /autor/:id
    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({ message: "Erro na requisição do autor", error: error.message });
        }
    };

    // Para cadastrar um autor
    // POST /autor
    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar autor` });
        }
    };

    // Para atualizar um autor
    // PUT /autor/:id
    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Erro na atualização do autor", error: error.message });
        }
    };

    // Para excluir autor
    // DELETE /autor/:id
    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor excluído com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Erro na exclusão do autor", error: error.message });
        }
    };

    // Para listar por nome do Autor
    // GET /autor/nome
    static async listarAutorPorNome(req, res) {
        try {
            const nome = req.query.nome;
            const autorEncontrado = await autor.find({ nome: new RegExp(nome, 'i') });
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({ message: "Erro na requisição do autor", error: error.message });
        }
    }
}

export default AutorController;
