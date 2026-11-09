import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        service: "auth-service",
        message: "Auth Service is running",
    });
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
});