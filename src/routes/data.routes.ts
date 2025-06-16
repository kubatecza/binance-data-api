import express from 'express';
import { fetchDataQueryValidation } from '../validation/data.validation';
import { getDataFromBinance } from '../controllers/data.controllers';

const router = express.Router();

router.get('/', fetchDataQueryValidation, getDataFromBinance);

export default router;
