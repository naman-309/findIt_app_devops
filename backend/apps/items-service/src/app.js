import express from "express";
import healthRoutes from "./modules/health/health.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import { notFound } from "./middlewares/not-found.middleware.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";

const app = express();

app.use(express.json());

app.use("/health", healthRoutes);

//swager  
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Error handling middleware
app.use(notFound);
app.use(errorHandler);

export default app;