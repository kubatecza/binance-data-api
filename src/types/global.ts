export type TFetchDataQuery = {
    symbol: string;
    interval: string;
    startDate: Date;
    endDate: Date;
    limit?: number;
};
