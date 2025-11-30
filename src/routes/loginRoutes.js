import express from "express";
import { registrarLogin, listarLogins } from "../controllers/loginController.js";

const router = express.Router();

router.post("/", registrarLogin);
router.get("/", listarLogins);

export default router;
