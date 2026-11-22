
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


import authRoutes from "./modules/auth/auth.routes.js";

const app = express();

const PORT = process.env.PORT || 3001;

// 1. CORS configuration
app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        credentials: true,
    })
);

// 2. Body and cookie middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 3. Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "FindIt Auth Service API",
            version: "1.0.0",
            description: "Authentication APIs for FindIt",
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ["./src/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// 4. API Documentation
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

// 5. Health Check
// app.get("/health", (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "Auth Service is healthy",
//     });
// });
// 5. Health Check
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        service: "auth-service",
        message: "Auth Service is healthy",
    });
});

// 6. Auth Routes
app.use("/api/auth", authRoutes);

// 7. Not Found Handler
app.use((req, res, next) => {
    const error = new Error(
        `Route not found: ${req.method} ${req.originalUrl}`
    );

    error.statusCode = 404;
    next(error);
});

// 8. Global Error Handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || err.status || 500;

    res.status(statusCode).json({
        success: false,
        message:
            statusCode === 500
                ? "Internal server error"
                : err.message,
    });
});

export default app;
