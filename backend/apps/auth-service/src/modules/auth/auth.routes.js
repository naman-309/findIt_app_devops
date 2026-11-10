import express from "express";

import { registerUser } from "./auth.controller.js";
import { registerSchema } from "./auth.schemas.js";
import { validate } from "../../middlewares/validate.middleware.js";

const router = express.Router();

router.post("/register", validate(registerSchema), registerUser);

export default router;