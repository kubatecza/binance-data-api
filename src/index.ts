import { createServer } from './app';

const PORT = process.env.PORT || 3000;

const startServer = () => {
    const app = createServer();

    app.listen(PORT, () => {
        console.log(`Server listening on port https:localhost:${PORT}`);
    });
};

startServer();
