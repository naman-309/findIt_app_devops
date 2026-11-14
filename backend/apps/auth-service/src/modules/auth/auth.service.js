
import { pool } from "../../database/connection.js";

export const createUser = async ({ name, email, passwordHash }) => {
    const query = `
    INSERT INTO auth_schema.users
    (name, email, password_hash)
    VALUES ($1, $2, $3)
    RETURNING id, name, email, created_at
  `;

    const values = [
        name,
        email.toLowerCase().trim(),
        passwordHash,
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
};
