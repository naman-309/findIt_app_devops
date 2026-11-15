
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





export const findUserByEmail = async (email) => {
    const query = `
    SELECT id, name, email, password_hash
    FROM auth_schema.users
    WHERE LOWER(email) = LOWER($1)
  `;

    const result = await pool.query(query, [email.trim()]);

    return result.rows[0] || null;
};


//
export const findUserById = async (userId) => {
    const query = `
    SELECT id, name, email, created_at
    FROM auth_schema.users
    WHERE id = $1
  `;

    const result = await pool.query(query, [userId]);

    return result.rows[0] || null;
};