import app from "./app.js";
import { connectDB } from "./database/connection.js";

const PORT = 3002;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Auth Service running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start Auth Service:", error.message);
        process.exit(1);
    }
};

startServer();