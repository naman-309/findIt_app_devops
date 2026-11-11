import express from "express";
import { checkHealth } from "./health.controller.js";

const router = express.Router();
/**
 * @openapi
 * /health:
 *   get:
 *     summary: Check service health
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Service is running
 */
router.get("/", checkHealth);

export default router;