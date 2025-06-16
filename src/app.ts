import express from 'express';

export const createServer = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    return app;
};
