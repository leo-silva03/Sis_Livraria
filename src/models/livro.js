import mongoose, { mongo } from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    editora: {type: String},
    autor: {type: Number},
    paginas: {type: Number},
}, {versionKey: false})

const livro = mongoose.model("livro", livroSchema);

export default livro;