export type TBinanceRequestData = [number, string, string, string, string, string, number, string, number, string, string, string];

export type TBinanceData = {
    openTime: Date;
    openPrice: string;
    highestPrice: string;
    lowestPrice: string;
    closePrice: string;
    volume: string;
    closeTime: Date;
    quoteAssetVlume: string;
    numberOfTrades: number;
    takerBuyBaseVolume: string;
    takerBuyQuoteVolume: string;
};
