import express from "express";
import { criarOperador, listarOperadores, obterOperador } from "../controllers/operadorController.js";

const router = express.Router();

router.post("/", criarOperador);
router.get("/", listarOperadores);
router.get("/:id", obterOperador);

export default router;
