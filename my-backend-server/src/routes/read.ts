import { Router } from 'express';
import { readController } from '../controllers/readController';

export const readRouter = Router();

readRouter.get('/', readController);
