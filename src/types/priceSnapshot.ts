import mongoose from 'mongoose';
import { TBinanceData } from './binanceData';

export type TPriceSnapshotInterval = TBinanceData & {
    _id: mongoose.Types.ObjectId;
};

export type TPriceSnapshotDefinition = mongoose.Document & {
    startDate: Date;
    endDate: Date;
    intervals: TPriceSnapshotDefinition[];
};
