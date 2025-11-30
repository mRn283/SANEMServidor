import express from "express";
import { registrarAcesso, listarAcessos } from "../controllers/loginLogoutController.js";

const router = express.Router();

router.post("/", registrarAcesso); // body: { idRegistro, idOperador, modo }
router.get("/", listarAcessos);

export default router;
