import mongoose from 'mongoose';
import { TPriceSnapshotDefinition, TPriceSnapshotInterval } from '../types/priceSnapshot';

const Schema = mongoose.Schema;

const priceSnapshotIntervalSchema = new Schema<TPriceSnapshotInterval>({
    openTime: Date,
    openPrice: String,
    highestPrice: String,
    lowestPrice: String,
    closePrice: String,
    volume: String,
    closeTime: Date,
    quoteAssetVlume: String,
    numberOfTrades: Number,
    takerBuyBaseVolume: String,
    takerBuyQuoteVolume: String
});

const priceSnapshotSchema = new Schema({
    symbol: String,
    startDate: Date,
    endDate: Date,
    intervals: [priceSnapshotIntervalSchema]
});

export const PriceSnapshot = mongoose.model<TPriceSnapshotDefinition>('PriceSnapshot', priceSnapshotSchema);
