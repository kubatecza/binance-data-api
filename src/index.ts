import { createServer } from './app';
import { connectDb } from './config/db';
import { fetchBinanceData } from './utils/fetchBinanceData';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    const app = createServer();

    await connectDb();
    app.listen(PORT, () => {
        console.log(`Server listening on port https:localhost:${PORT}`);
    });

    // await fetchBinanceData({ symbol: 'BTCUSDT', interval: '1d', startDate: new Date('2025-05-16T00:00:00Z'), endDate: new Date('2025-06-16T00:00:00Z') });
};

startServer();
