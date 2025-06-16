import { NextFunction, Request, Response } from 'express';
import { fetchBinanceData } from '../utils/fetchBinanceData';
import { formatBinanceData } from '../utils/formatBinanceData';
import { createPriceSnapshot } from '../services/data.services';
import CustomError from '../utils/customError';

export const getDataFromBinance = async (req: Request, res: Response, next: NextFunction) => {
    const {
        symbol,
        interval,
        startDate: startDateString,
        endDate: endDateString,
        limit
    }: {
        symbol?: string;
        interval?: string;
        startDate?: string;
        endDate?: string;
        limit?: string;
    } = req.query;
    if (!symbol || !interval || !startDateString || !endDateString) {
        const error = new CustomError('Query data missing', 400);
        return next(error);
    }
    const [startDate, endDate] = [new Date(startDateString), new Date(endDateString)];
    try {
        const fetchedBinanceData = await fetchBinanceData({ symbol, interval, startDate, endDate, limit: limit ? Number(limit) : undefined });
        if (!fetchedBinanceData) {
            const error = new CustomError('Could not access Binance data', 500);
            return next(error);
        }

        const formattedBinanceData = formatBinanceData(fetchedBinanceData);

        await createPriceSnapshot({ symbol, startDate, endDate, intervals: formattedBinanceData });

        res.status(200).json({ formattedBinanceData });
    } catch (err: any) {
        const error = new CustomError(err);
        return next(error);
    }
};
