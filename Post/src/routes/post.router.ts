import express, { Router } from "express";
import { sendPost } from "../controllers/post.controller";

const router: Router = express.Router();

router.post("/sendPost", sendPost);

export default router;
