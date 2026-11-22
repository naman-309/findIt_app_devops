import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import healthRoutes from "./modules/health/health.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";
import { notFound } from "./middlewares/not-found.middleware.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/health", healthRoutes);
app.use("/api/auth", authRoutes);

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

export default app;