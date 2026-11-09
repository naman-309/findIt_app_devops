import express from "express";
import healthRoutes from "./modules/health/health.routes.js";
//error handlers 
import { notFound } from "./middlewares/not-found.middleware.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";

const app = express();

app.use(express.json());

app.use("/health", healthRoutes);





// Error handling middleware
app.use(notFound);
app.use(errorHandler);

export default app;