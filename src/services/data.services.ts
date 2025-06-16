import { PriceSnapshot } from '../models/PriceSnapshot';
import { TCreatePriceSnapshot } from '../types/priceSnapshot';
import CustomError from '../utils/customError';

export const createPriceSnapshot = async (data: TCreatePriceSnapshot) => {
    const created = await PriceSnapshot.create([data]);

    if (!created[0]._id) {
        throw new CustomError('Could not create PriceSnapshot', 500);
    }

    return created;
};
