import express from "express";
import { criarTipo, listarTipos, obterTipo } from "../controllers/tipoController.js";

const router = express.Router();

router.post("/", criarTipo);
router.get("/", listarTipos);
router.get("/:id", obterTipo);

export default router;
