import express from 'express';
import dataRoutes from './routes/data.routes';
import { errorHandler } from './utils/customError';

export const createServer = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/data', dataRoutes);

    app.use(errorHandler);
    return app;
};
