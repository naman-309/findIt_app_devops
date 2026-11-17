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

export const getAllItems = async () => {
  const query = `
    SELECT
      id,
      user_id,
      title,
      description,
      type,
      location,
      item_date,
      status,
      created_at
    FROM items_schema.items
    WHERE status = 'active'
    ORDER BY created_at DESC
  `;

  const result = await pool.query(query);

  return result.rows;
};

export const searchItems = async (searchTerm) => {
  const query = `
    SELECT
      id,
      user_id,
      title,
      description,
      type,
      location,
      status,
      created_at
    FROM items_schema.items
    WHERE status = 'active'
    AND title ILIKE $1
    ORDER BY created_at DESC
  `;

  const result = await pool.query(query, [
    `%${searchTerm}%`,
  ]);

  return result.rows;
};

export const getItemById = async (itemId) => {
  const query = `
    SELECT
      id,
      user_id,
      title,
      description,
      type,
      location,
      item_date,
      status,
      created_at
    FROM items_schema.items
    WHERE id = $1
    AND status = 'active'
  `;

  const result = await pool.query(query, [itemId]);

  return result.rows[0] || null;
};