export const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse({
            body: req.body,
            params: req.params,
            query: req.query,
        });

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: result.error.issues.map((issue) => ({
                    field: issue.path.join("."),
                    message: issue.message,
                })),
            });
        }

        req.validated = result.data;

        next();
    };
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