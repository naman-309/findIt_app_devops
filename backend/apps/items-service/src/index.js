import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        service: "items-service",
        message: "Items Service is running",
    });
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Items Service running on port ${PORT}`);
});