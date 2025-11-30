import express from "express";
import cors from "cors";

// Routes
import operadorRoutes from "./routes/operadorRoutes.js";
import tipoRoutes from "./routes/tipoRoutes.js";
import beneficiarioRoutes from "./routes/beneficiarioRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import loginLogoutRoutes from "./routes/loginLogoutRoutes.js";
import doacaoEnviadaRoutes from "./routes/doacaoEnviadaRoutes.js";
import doacaoRecebidaRoutes from "./routes/doacaoRecebidaRoutes.js";
import estoqueRoutes from "./routes/estoqueRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// mount routes
app.use("/operadores", operadorRoutes);
app.use("/tipos", tipoRoutes);
app.use("/beneficiarios", beneficiarioRoutes);
app.use("/login", loginRoutes);                 // se usar registro simples de login
app.use("/login-logout", loginLogoutRoutes);   // rota para login/logout com modo 1/0
app.use("/doacoes/enviadas", doacaoEnviadaRoutes);
app.use("/doacoes/recebidas", doacaoRecebidaRoutes);
app.use("/estoques", estoqueRoutes);

app.get("/", (req, res) => res.json({ message: "API SANEM (em memória) funcionando" }));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
