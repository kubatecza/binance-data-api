import { TBinanceData, TBinanceRequestData } from '../types/binanceData';

export const formatBinanceData = (data: TBinanceRequestData[]): TBinanceData[] => {
    let result = [];
    for (const interval of data) {
        let formattedInterval: TBinanceData = {
            openTime: new Date(interval[0]),
            openPrice: interval[1],
            highestPrice: interval[2],
            lowestPrice: interval[3],
            closePrice: interval[4],
            volume: interval[5],
            closeTime: new Date(interval[6]),
            quoteAssetVlume: interval[7],
            numberOfTrades: interval[8],
            takerBuyBaseVolume: interval[9],
            takerBuyQuoteVolume: interval[10]
        };

        result.push(formattedInterval);
    }

    return result;
};
