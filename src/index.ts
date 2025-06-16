import { createServer } from './app';
import { connectDb } from './config/db';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    const app = createServer();

    await connectDb();
    app.listen(PORT, () => {
        console.log(`Server listening on port https:localhost:${PORT}`);
    });
};

startServer();
