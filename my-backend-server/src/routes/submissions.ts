import { Router } from 'express';
import { submissionsController } from '../controllers/submissionsController';

export const submissionsRouter = Router();

submissionsRouter.get('/', submissionsController);
