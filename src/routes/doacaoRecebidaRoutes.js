import express from "express";
import { registrarDoacaoRecebida, listarDoacoesRecebidas } from "../controllers/doacaoRecebidaController.js";

const router = express.Router();

router.post("/", registrarDoacaoRecebida);
router.get("/", listarDoacoesRecebidas);

export default router;
