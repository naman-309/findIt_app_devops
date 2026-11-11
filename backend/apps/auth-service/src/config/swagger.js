import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "FindIt Auth Service API",
            version: "1.0.0",
            description: "API documentation for FindIt Authentication Service",
        },

        servers: [
            {
                url: "http://localhost:3001",
                description: "Local development server",
            },
        ],
    },

    apis: ["./src/modules/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;