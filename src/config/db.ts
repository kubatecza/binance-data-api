import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDb = async () => {
    const DB_URI = process.env.DB;
    if (!DB_URI) {
        throw new Error('Database URI not provided');
    }

    try {
        await mongoose.connect(DB_URI);
        console.log('Database connected successfully');
    } catch (err) {
        console.log('Database connection error', err);
        process.exit(1);
    }
};
