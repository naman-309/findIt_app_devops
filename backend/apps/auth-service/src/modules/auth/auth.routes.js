import express from "express";

import { registerUser } from "./auth.controller.js";
import { registerSchema } from "./auth.schemas.js";
import { validate } from "../../middlewares/validate.middleware.js";

const router = express.Router();
/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Rahul
 *               email:
 *                 type: string
 *                 example: rahul@gmail.com
 *               password:
 *                 type: string
 *                 example: rahul12345
 *     responses:
 *       200:
 *         description: Validation successful
 *       400:
 *         description: Validation failed
 */
router.post("/register", validate(registerSchema), registerUser);

export default router;