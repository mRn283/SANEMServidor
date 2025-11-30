import express from "express";
import { criarBeneficiario, listarBeneficiarios, obterBeneficiario } from "../controllers/beneficiarioController.js";

const router = express.Router();

router.post("/", criarBeneficiario);
router.get("/", listarBeneficiarios);
router.get("/:id", obterBeneficiario);

export default router;
