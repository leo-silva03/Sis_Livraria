import "dotenv/config";
import app from "./src/app.js";
const PORT = 3000;

//Para rodar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});