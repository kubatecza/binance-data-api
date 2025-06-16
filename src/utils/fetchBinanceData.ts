import axios from 'axios';
import { TBinanceRequestData } from '../types/binanceData';
import { formatBinanceData } from './formatBinanceData';

export const fetchBinanceData = async (data: { symbol: string; interval: string; startDate: Date; endDate: Date; limit?: number }) => {
    const BINANCE_DATA_URL = 'https://api.binance.com/api/v3/klines';
    const { symbol, interval, startDate, endDate, limit } = data;

    const [startTime, endTime] = [startDate.getTime(), endDate.getTime()];

    const params = `?symbol=${symbol}&interval=${interval}&startTime=${startTime}&endTime=${endTime}&limit=${limit ?? 200}`;
    try {
        const request = await axios.get(BINANCE_DATA_URL + params);

        const binanceData = formatBinanceData(request.data as TBinanceRequestData[]);

        return binanceData;
    } catch (err) {
        console.log('Error during fetching Binance data ', err);
    }
};
