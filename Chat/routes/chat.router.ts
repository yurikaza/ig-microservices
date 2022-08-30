import express, { Router } from "express";
import { sendMessage } from "../controllers/chat.controller";

const router: Router = express.Router();

router.post("/sendMessage/:id", sendMessage);

export default router;
