import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { Submission } from '../models/submission';

const dbFilePath = path.resolve(__dirname, '../../db.json');

export const submissionsController = (req: Request, res: Response) => {
    if (!fs.existsSync(dbFilePath)) {
        return res.status(404).json({ error: 'No submissions found' });
    }

    const data = fs.readFileSync(dbFilePath, 'utf8');
    const submissions: Submission[] = JSON.parse(data);

    res.json(submissions);
};
