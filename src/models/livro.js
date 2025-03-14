import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    autor: { type: String }, 
    preco: { type: Number, required: true }, 
    paginas: { type: Number, required: true } 
}, { versionKey: false });

const livro = mongoose.model("livro", livroSchema);

export default livro;