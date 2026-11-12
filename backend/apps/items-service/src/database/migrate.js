
import "dotenv/config";
import { runner } from "node-pg-migrate";

const databaseUrl = `postgresql://${encodeURIComponent(
    process.env.DB_USER
)}:${encodeURIComponent(
    process.env.DB_PASSWORD
)}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const runMigrations = async () => {
    try {
        await runner({
            databaseUrl,
            dir: "migrations",
            direction: "up",
            migrationsTable: "pgmigrations",
            migrationsSchema: "items_schema",
            schema: "items_schema",
        });

        console.log("Items migrations completed successfully");
        process.exit(0);
    } catch (error) {
        console.error("Items migration failed:", error);
        process.exit(1);
    }
};

runMigrations();
