export const checkHealth = (req, res) => {
    res.status(200).json({
        success: true,
        service: "auth-service",
        message: "Auth Service is running",
    });
};