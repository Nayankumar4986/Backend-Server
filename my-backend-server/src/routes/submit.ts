import { Router } from 'express';
import { submitController } from '../controllers/submitController';

export const submitRouter = Router();

submitRouter.post('/', submitController);
