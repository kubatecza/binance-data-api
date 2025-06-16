import Joi from 'joi';
import { TFetchDataQuery } from '../types/global';
import { NextFunction, Request, Response } from 'express';
import CustomError from '../utils/customError';

const fetchDataQuerySchema = Joi.object<TFetchDataQuery>({
    symbol: Joi.string().required(), //todo: correct binance api enums
    interval: Joi.string().required(), //todo: correct binance api intervals
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    limit: Joi.number().optional().min(1).max(1000)
});

export const fetchDataQueryValidation = (req: Request, res: Response, next: NextFunction) => {
    const { error: queryError } = fetchDataQuerySchema.validate(req.query);
    if (queryError) {
        const error = new CustomError(queryError.message, 400);
        next(error);
    }

    next();
};
