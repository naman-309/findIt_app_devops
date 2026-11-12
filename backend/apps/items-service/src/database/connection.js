import "dotenv/config";
import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

export const connectDB = async () => {
    try {
        const result = await pool.query("SELECT NOW()");

        console.log("Items Database Connected Successfully");
        console.log("Database Time:", result.rows[0].now);
    } catch (error) {
        console.error("Items Database Connection Failed:", error.message);
        throw error;
    }
};