
import swaggerJsdoc from "swagger-jsdoc";
import { fileURLToPath } from "node:url";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "FindIt Auth Service API",
            version: "1.0.0",
            description: "Authentication APIs for FindIt",
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3001}`,
            },
        ],
    },

    apis: [
        fileURLToPath(new URL("../**/*.js", import.meta.url)),
    ],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
