import { Request, Response, NextFunction } from 'express';

export default class CustomError extends Error {
    code?: number;

    constructor(message: string, errorCode?: number) {
        super(message), (this.code = errorCode);
    }
}

export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.log('Error: ', err.message);
    res.status(err.code ?? 500).json({ message: err.message ?? 'Internal server error' });
};
