export const checkHealth = (req, res) => {
    res.status(200).json({
        success: true,
        service: "items-service",
        message: "Items Service is running",
    });
};