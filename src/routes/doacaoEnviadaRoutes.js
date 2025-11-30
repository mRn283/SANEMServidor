import express from "express";
import { registrarDoacaoEnviada, listarDoacoesEnviadas } from "../controllers/doacaoEnviadaController.js";

const router = express.Router();

router.post("/", registrarDoacaoEnviada);
router.get("/", listarDoacoesEnviadas);

export default router;
