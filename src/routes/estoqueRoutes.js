import express from "express";
import { criarEstoque, listarEstoques } from "../controllers/estoqueController.js";

const router = express.Router();

router.post("/", criarEstoque);
router.get("/", listarEstoques);

export default router;
