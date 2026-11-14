
export const up = (pgm) => {
    pgm.createTable(
        { schema: "items_schema", name: "items" },
        {
            id: {
                type: "uuid",
                primaryKey: true,
                notNull: true,
                default: pgm.func("gen_random_uuid()"),
            },
            user_id: {
                type: "uuid",
                notNull: true,
            },
            title: {
                type: "varchar(150)",
                notNull: true,
            },
            description: {
                type: "text",
                notNull: true,
            },
            type: {
                type: "varchar(10)",
                notNull: true,
            },
            location: {
                type: "varchar(255)",
                notNull: true,
            },
            item_date: {
                type: "date",
            },
            status: {
                type: "varchar(20)",
                notNull: true,
                default: "active",
            },
            created_at: {
                type: "timestamptz",
                notNull: true,
                default: pgm.func("now()"),
            },
            updated_at: {
                type: "timestamptz",
                notNull: true,
                default: pgm.func("now()"),
            },
        }
    );

    pgm.addConstraint(
        { schema: "items_schema", name: "items" },
        "items_type_check",
        "CHECK (type IN ('lost', 'found'))"
    );

    pgm.addConstraint(
        { schema: "items_schema", name: "items" },
        "items_status_check",
        "CHECK (status IN ('active', 'recovered'))"
    );

    pgm.createIndex(
        { schema: "items_schema", name: "items" },
        "user_id",
        { name: "items_user_id_idx" }
    );

    pgm.createIndex(
        { schema: "items_schema", name: "items" },
        ["type", "status"],
        { name: "items_type_status_idx" }
    );

    pgm.createIndex(
        { schema: "items_schema", name: "items" },
        "created_at",
        {
            name: "items_created_at_idx",
            method: "btree",
            order: "DESC",
        }
    );
};

export const down = (pgm) => {
    pgm.dropTable(
        { schema: "items_schema", name: "items" }
    );
};
