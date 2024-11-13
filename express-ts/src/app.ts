import appModulePath from 'app-module-path';
appModulePath.addPath(__dirname);

import getEnv from "env";
import ms from 'ms';
import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import expressRateLimit from 'express-rate-limit';
import cors from 'cors';
import { HttpError } from 'http-errors';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from 'services/swagger_output.json';
const env = getEnv();

import indexRouter from 'routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

try {
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, {explorer: true}));
    console.log("Swagger documentation is available at /api/v1/docs");
} catch (error) {
    console.error("Error loading Swagger documentation:", error);
}

if (env.nodeEnv === 'production') {
    const limiter = expressRateLimit({
        windowMs: ms("5m"),
        max: 100, // Limit each IP to 100 requests per windowMs
        standardHeaders: true, // Return rate limit info in the "RateLimit-*" headers
        legacyHeaders: false // Disable the "X-RateLimit-*" headers
    });

    app.use(limiter);
}

app.use(cors({
    origin: env.nodeEnv === 'production'
        ? env.prodClientUrl : env.devClientUrl,
    credentials: true
}));

app.use('/', indexRouter);

app.use(function(err: HttpError, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);

    res.status(err.status || 500);
    res.json({ message: err.message });
});

export default app;