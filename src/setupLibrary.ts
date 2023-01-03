import express from 'express';
import logger from "morgan";
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

function setupLibrary(app: express.Express) {
    app.use(logger("dev"));

    app.use(cors({
        credentials: true,
        origin: ["http://localhost:3000"]
    }));

    // http://localhost:8000/spec/
    const options = {
        swaggerDefinition: {
            info: {
                title: "Express TypeScript",
                version: "1.0.0"
            }
        },
        apis: ["routes/*"]
    };
    app.use("/spec", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
}
export default setupLibrary;