import { Router } from 'express';
import { pingController } from '../controllers/pingController';

export const pingRouter = Router();

pingRouter.get('/', pingController);
