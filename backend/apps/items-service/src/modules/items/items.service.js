import { pool } from "../../database/connection.js";

export const createItem = async ({
    userId,
    title,
    description,
    type,
    location,
}) => {
    const query = `
    INSERT INTO items_schema.items
    (user_id, title, description, type, location)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;

    const values = [
        userId,
        title,
        description,
        type,
        location,
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
};