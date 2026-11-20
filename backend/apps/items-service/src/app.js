import express from "express";
import morgan from "morgan";
import healthRoutes from "./modules/health/health.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import { notFound } from "./middlewares/not-found.middleware.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import cookieParser from "cookie-parser";
import itemsRoutes from "./modules/items/items.routes.js";
const app = express();
app.use(morgan('dev'));


app.use(express.json());
app.use(cookieParser());
app.use("/health", healthRoutes);
app.use("/api/items", itemsRoutes);

//swager  
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Error handling middleware
app.use(notFound);
app.use(errorHandler);

export default app;