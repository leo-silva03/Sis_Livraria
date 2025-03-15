import livro from "../models/livro.js";
import autor from "../models/autor.js"; 

// Controler para organizar o CRUD de livros
// CRUD - Create, Read, Update, Delete
class LivroController {

    // Para listar todos os livros
    // GET /livros
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar livros", error: error.message });
        }
    };

    // Para listar um livro específico
    // GET /livros/:id
    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: "Erro na requisição do livro", error: error.message });
        }
    };

    // Para cadastrar um livro
    // POST /livros
    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao Cadastrar livro` });
        }
    };

    // Para atualizar um livro
    // PUT /livros/:id
    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Erro na atualização do livro", error: error.message });
        }
    };

    // Para excluir livro
    // DELETE /livros/:id
    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluído com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Erro na exclusão do livro", error: error.message });
        }
    };
}

export default LivroController;