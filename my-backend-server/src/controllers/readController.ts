import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { Submission } from '../models/submission';

const dbFilePath = path.resolve(__dirname, '../../db.json');

export const readController = (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string, 10);

    if (isNaN(index)) {
        return res.status(400).json({ error: 'Invalid index' });
    }

    if (!fs.existsSync(dbFilePath)) {
        return res.status(404).json({ error: 'No submissions found' });
    }

    const data = fs.readFileSync(dbFilePath, 'utf8');
    const submissions: Submission[] = JSON.parse(data);

    if (index < 0 || index >= submissions.length) {
        return res.status(404).json({ error: 'Submission not found' });
    }

    res.json(submissions[index]);
};
