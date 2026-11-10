import express from "express";
import healthRoutes from "./modules/health/health.routes.js";
//error handlers 
import { notFound } from "./middlewares/not-found.middleware.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
// auth 
import authRoutes from "./modules/auth/auth.routes.js";
const app = express();

app.use(express.json());

app.use("/health", healthRoutes);
// main apis 
app.use("/api/auth", authRoutes);


// Error handling middleware
app.use(notFound);
app.use(errorHandler);

export default app;