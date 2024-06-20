import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { Submission } from '../models/submission';

const dbFilePath = path.resolve(__dirname, '../../db.json');

export const submitController = (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;

    const newSubmission: Submission = {
        Name: name,
        Email: email,
        PhoneNumber: phone,
        GithubLink: github_link,
        StopwatchTime: stopwatch_time
    };

    let submissions: Submission[] = [];

    if (fs.existsSync(dbFilePath)) {
        const data = fs.readFileSync(dbFilePath, 'utf8');
        submissions = JSON.parse(data);
    }

    submissions.push(newSubmission);

    fs.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2));

    res.status(201).json(newSubmission);
};
