"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitController = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbFilePath = path_1.default.resolve(__dirname, '../../db.json');
const submitController = (req, res) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    const newSubmission = {
        Name: name,
        Email: email,
        PhoneNumber: phone,
        GithubLink: github_link,
        StopwatchTime: stopwatch_time
    };
    let submissions = [];
    if (fs_1.default.existsSync(dbFilePath)) {
        const data = fs_1.default.readFileSync(dbFilePath, 'utf8');
        submissions = JSON.parse(data);
    }
    submissions.push(newSubmission);
    fs_1.default.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2));
    res.status(201).json(newSubmission);
};
exports.submitController = submitController;
