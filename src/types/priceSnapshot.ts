import mongoose from 'mongoose';
import { TBinanceData } from './binanceData';

export type TPriceSnapshotInterval = TBinanceData;
export type TPriceSnapshotIntervalDefinition = TPriceSnapshotInterval & {
    _id: mongoose.Types.ObjectId;
};

export type TPriceSnapshot = {
    symbol: string;
    startDate: Date;
    endDate: Date;
    intervals: TPriceSnapshotDefinition[];
};
export type TPriceSnapshotDefinition = mongoose.Document & TPriceSnapshot;

export type TCreatePriceSnapshot = Omit<TPriceSnapshot, 'intervals'> & { intervals: TPriceSnapshotInterval[] };
